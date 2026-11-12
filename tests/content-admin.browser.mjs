import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { chromium, expect } from '@playwright/test';
import { createChapterDraft } from '../app/os/admin/chapter-authoring.js';
import { readFileSync } from 'node:fs';
const useProductionCSS=process.env.CIRCLE_PRODUCTION_CSS==='1';
const productionStylePaths=useProductionCSS?[...new Set([...readFileSync('.next/server/app/os.html','utf8').matchAll(/href="(\/_next\/static\/[^"?]+\.css)(?:\?[^" ]*)?"/g)].map(match=>match[1]))]:[];
if(useProductionCSS)assert.ok(productionStylePaths.length,'build Next before production-CSS checks');
const productionStyles=productionStylePaths.map(path=>readFileSync(`.next${path.slice('/_next'.length)}`,'utf8')).join('\n');
let server,browser,base;

test('existing catalog run reloads with its original definition',{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width:390,height:900}}),chapter=createChapterDraft().chapter;chapter.id='saved-catalog-run';chapter.pages[0].title='Saved original cover';
 try{await context.route('**/*',async route=>{const url=new URL(route.request().url());if(url.origin!==base)return route.abort();if(url.pathname==='/os/catalog')return route.fulfill({json:{version:1,content:{kind:'chapter',chapter}}});return route.continue();});
 const page=await context.newPage();await page.goto(base+'/fixture?reader=1&id=saved-catalog-run&version=1');await expect(page.getByRole('heading',{name:'Saved original cover'})).toBeVisible();
 await page.evaluate(async definition=>{const {createChapterRun,chapterRunId}=await import('/app/os/chapters/chapter-model.js');const run=createChapterRun(definition);run.currentPageId='opening';run.furthestPageId='opening';window.readerUpdate(current=>({...current,chapters:{...current.chapters,runs:{[chapterRunId(definition)]:run}}}));},chapter);
 await expect.poll(()=>page.evaluate(()=>window.readerDefinitions[0]?.id)).toBe('saved-catalog-run');
 await page.reload();await expect.poll(()=>page.evaluate(()=>Object.values(window.readerState?.chapters.runs||{})[0]?.currentPageId)).toBe('opening');await expect.poll(()=>page.evaluate(()=>window.readerDefinitions[0]?.version)).toBe(1);
 }finally{await context.close();}
});

test('new Chapter exact-version reading previews without creating personal evidence',{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width:390,height:900}});const chapter=createChapterDraft().chapter;chapter.id='catalog-preview';chapter.title='Original chapter';chapter.pages[0].title='Original cover';
 try{await context.route('**/*',async route=>{const url=new URL(route.request().url());if(url.origin!==base)return route.abort();if(url.pathname==='/os/catalog')return route.fulfill({json:{version:1,content:{kind:'chapter',chapter}}});return route.continue();});
 const page=await context.newPage();await page.goto(base+'/fixture?reader=1&id=catalog-preview&version=1');await expect(page.getByRole('heading',{name:'Original cover',exact:true})).toBeVisible();assert.deepEqual(await page.evaluate(()=>window.readerState.chapters.runs),{});await page.reload();await expect(page.getByText('Original cover',{exact:true})).toBeVisible();assert.deepEqual(await page.evaluate(()=>window.readerState.chapters.runs),{});
 }finally{await context.close();}
});

test('signed-in Article reader reloads exact content and retries its targeted image',{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width:390,height:900}});let failImage=true;const reads=[];
 try{
 await context.route('**/*',async route=>{const url=new URL(route.request().url());if(url.origin!==base)return route.abort();
 if(url.pathname==='/os/catalog'){reads.push(url.search);return route.fulfill({json:{version:1,content:{kind:'article',article:{title:'Original edition',summary:'Original summary',cover:{assetId:'33333333-3333-4333-8333-333333333333',alt:'Original tree'},blocks:[{id:'body',type:'paragraph',text:'Original words'}]}}}});}
 if(url.pathname==='/os/catalog/media')return failImage?route.fulfill({status:404,json:{error:'unavailable'}}):route.fulfill({json:{preview:base+'/reader-tree.svg'}});
 if(url.pathname==='/reader-tree.svg')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect width="200" height="100"/></svg>'});
 return route.continue();});
 const page=await context.newPage();page.on('pageerror',error=>console.log('Reader fixture error',error.message));await page.goto(base+'/fixture?reader=1&id=original&version=1');await expect(page.getByRole('heading',{name:'Original edition',exact:true})).toBeVisible();
 await expect(page.getByRole('button',{name:'Retry image'})).toBeVisible();failImage=false;await page.getByRole('button',{name:'Retry image'}).click();await expect.poll(()=>page.getByRole('img',{name:'Original tree',exact:true}).evaluate(img=>img.naturalWidth)).toBe(200);
 await page.reload();await expect(page.getByText('Original words',{exact:true})).toBeVisible();assert.equal(reads.length,2);assert.ok(reads.every(query=>query.includes('version=1')));
 }finally{await context.close();}
});

test('catalog publishing retries an uncertain operation and withdraws without removing version links',{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width:390,height:900}});
 const draft=createChapterDraft();draft.chapter.id='catalog-synthetic';
 const items=[],posts=[];let first=true;
 try{
 await context.route('**/*',async route=>{const request=route.request(),url=new URL(request.url());if(url.origin!==base)return route.abort();
 if(url.pathname==='/os/admin/status')return route.fulfill({json:{admin:true}});
 if(url.pathname==='/os/admin/catalog')return route.fulfill({json:[{id:draft.draftId,draft,revision:1}]});
 if(url.pathname==='/os/catalog')return route.fulfill({json:items});
 if(url.pathname==='/os/admin/publications'){
 const command=request.postDataJSON();posts.push(command);
 if(first){first=false;return route.abort();}
 if(command.action==='publish'&&!items.length)items.push({id:draft.chapter.id,kind:'chapter',title:draft.chapter.title,version:1,revision:1,withdrawn:false});
 if(command.action==='withdraw'){items[0].withdrawn=true;items[0].revision++;}
 return route.fulfill({json:{version:1,revision:items[0].revision}});
 }return route.continue();});
 const page=await context.newPage();page.on('dialog',dialog=>dialog.accept());await page.goto(`${base}/fixture`);
 await page.getByRole('button',{name:'Catalog publishing',exact:true}).click();await page.getByRole('button',{name:'Open catalog',exact:true}).click();
 await page.getByRole('button',{name:'Publish version 1',exact:true}).click();await expect(page.getByRole('button',{name:'Retry pending change'})).toBeEnabled();
 await page.reload();await page.getByRole('button',{name:'Catalog publishing',exact:true}).click();await page.getByRole('button',{name:'Retry pending change'}).click();
 await expect(page.getByRole('link',{name:'Read v1',exact:true})).toBeVisible();assert.deepEqual(posts[0],posts[1]);
 await page.getByRole('button',{name:'Withdraw item',exact:true}).click();await expect(page.getByRole('button',{name:'Restore to catalog',exact:true})).toBeVisible();await expect(page.getByRole('link',{name:'Read v1',exact:true})).toBeVisible();
 }finally{await context.close();}
});
test('new chapter glass and article image drafting survive save and reload', {timeout:90000}, async()=>{
 const context=await browser.newContext({viewport:{width:390,height:900}}); const rows=[];const errors=[];
 try {
  await context.route('**/*',async route=>{const url=new URL(route.request().url());if(url.origin!==base)return route.abort();if(url.pathname==='/content-tree.svg')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect width="200" height="100" fill="orange"/></svg>'});if(url.pathname==='/os/admin/status')return route.fulfill({json:{admin:true}});if(url.pathname==='/os/admin/media')return route.fulfill({json:[{id:'11111111-2222-4333-8444-555555555555',alt:'A tree',preview:`${base}/content-tree.svg`}]});if(url.pathname==='/os/admin/catalog'){if(route.request().method()==='POST'){const body=route.request().postDataJSON();const index=rows.findIndex(row=>row.id===body.draft.draftId);if(index>=0)rows.splice(index,1);rows.unshift({id:body.draft.draftId,draft:body.draft,revision:1});return route.fulfill({json:{revision:1}});}return route.fulfill({json:rows});}return route.continue();});
  const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));await page.goto(`${base}/fixture`);
  await page.getByRole('button',{name:'Blank chapter',exact:true}).click();await expect(page.locator('.os-chapter-session')).toHaveClass(/os-content-glass/);
  await page.getByRole('button',{name:'Choose image',exact:true}).click();await page.getByLabel('Image',{exact:true}).selectOption('11111111-2222-4333-8444-555555555555');await page.getByRole('button',{name:'Save draft',exact:true}).click();await expect.poll(()=>rows.length).toBe(1);assert.equal(rows[0].draft.chapter.pages[0].image.alt,'A tree');await page.locator('.os-chapter-session').screenshot({path:'outputs/new-chapter-glass.png'});const anchor=await page.locator('.os-chapter-session').evaluate(frame=>{const box=frame.getBoundingClientRect();const text=frame.querySelector('[aria-label="Edit cover title"]').getBoundingClientRect();return {top:text.top-box.top,left:text.left-box.left,height:box.height};});console.log('New glass chapter geometry',anchor);assert.ok(Math.abs(anchor.top-25)<2,JSON.stringify(anchor));assert.ok(Math.abs(anchor.left-25)<2,JSON.stringify(anchor));
  await page.getByRole('button',{name:'Articles',exact:true}).click();await page.getByLabel('Title',{exact:true}).fill('Synthetic article');await page.getByLabel('Summary',{exact:true}).fill('A synthetic summary.');
  await page.getByRole('button',{name:'Add paragraph',exact:true}).click();await page.getByLabel('Block text',{exact:true}).fill('Some words.');
  await page.getByRole('button',{name:'Choose image',exact:true}).click();await page.getByLabel('Image',{exact:true}).selectOption('11111111-2222-4333-8444-555555555555');
  await page.getByLabel('Caption',{exact:true}).fill('Morning tree');await page.getByRole('button',{name:'Save article',exact:true}).click();await expect(page.getByRole('status').filter({hasText:'Saved online'})).toBeVisible();
  assert.equal(rows[0].draft.article.cover.alt,'A tree');await page.reload();await page.getByRole('button',{name:'Articles',exact:true}).click();await expect(page.getByLabel('Title',{exact:true})).toHaveValue('Synthetic article');await expect(page.getByLabel('Block text',{exact:true})).toHaveValue('Some words.');await expect(page.locator('.os-article-preview')).toHaveClass(/os-content-glass/);await expect.poll(()=>page.locator('.os-article-preview img').evaluate(img=>img.naturalWidth)).toBe(200);await page.screenshot({path:'outputs/new-article-glass.png',fullPage:true});await expect(page.getByLabel('Summary',{exact:true})).toHaveValue('A synthetic summary.');const positions=await page.locator('.os-article-preview').evaluate(article=>{const children=[...article.children];return children.slice(0,3).map(node=>node.getBoundingClientRect().top);});assert.ok(positions[0]<positions[1]&&positions[1]<positions[2]);const order=await page.locator('.os-article-preview').evaluate(article=>[...article.children].slice(0,3).map(node=>node.tagName));assert.deepEqual(order,['FIGURE','H1','P']);const fields=await page.locator('fieldset').evaluate(form=>[...form.children].slice(0,4).map(node=>node.tagName));assert.deepEqual(fields,['H2','SECTION','LABEL','LABEL']);assert.deepEqual(errors,[]);
 }finally{await context.close();}
});
before(async () => {
 const harness=`
 import React from 'react';import{createRoot}from'react-dom/client';
 import{AccountAdmin}from'/app/os/admin/account-admin.tsx';
 import{SupabaseConnection}from'/app/os/auth/supabase-context.tsx';
 import{activateAccountScope}from'/app/os/account-scope.js';
 ${useProductionCSS?'':"import'/app/globals.css';import'/app/os/os-app.css';import'/app/os/content-glass.css';"}
 activateAccountScope('synthetic-admin');
 const value={client:{auth:{getSession:async()=>({data:{session:{access_token:'synthetic-token',user:{id:'synthetic-admin'}}}})}},config:{}};
 let surface=React.createElement(AccountAdmin);
 if(location.search.includes('reader=1')){const {default:Reader}=await import('/app/os/catalog/read/page.tsx');const {CircleStateProvider,useCircleState}=await import('/app/os/circle-os-shell.tsx');const {useCatalogDefinitions}=await import('/app/os/catalog/definitions.ts');function Probe(){const context=useCircleState();window.readerState=context.state;window.readerUpdate=context.updateState;window.readerDefinitions=useCatalogDefinitions(context.state.chapters.runs);return null;}surface=React.createElement(CircleStateProvider,null,React.createElement(Probe),React.createElement(Reader));}
 const admin=React.createElement(SupabaseConnection.Provider,{value},surface);
 const route=React.createElement('div',{className:'os-route-stage is-ready'},React.createElement('div',null,React.createElement('div',{className:'os-route-content'},admin)));
 createRoot(document.getElementById('root')).render(React.createElement('div',{className:'circle-os'},React.createElement('div',{className:'os-app-shell'},route)));
 `;
 server=await createServer({configFile:false,define:{'process.env':JSON.stringify({NODE_ENV:'development'})},plugins:[react(),{name:'admin-fixture',resolveId(id){if(id==='virtual:admin')return '\0admin.tsx';},load(id){if(id==='\0admin.tsx')return harness+'window.adminSwitch=activateAccountScope;';},configureServer(vite){vite.middlewares.use(async(req,res,next)=>{if(useProductionCSS&&req.url==='/fixture-production.css'){res.setHeader('Content-Type','text/css');res.end(productionStyles);return;}if(req.url?.split('?')[0]!=='/fixture')return next();res.setHeader('Content-Type','text/html');res.end(await vite.transformIndexHtml('/fixture','<meta name="viewport" content="width=device-width,initial-scale=1">'+(useProductionCSS?'<link rel="stylesheet" href="/fixture-production.css">':'')+'<div id="root"></div><script type="module" src="/@id/virtual:admin"></script>'));});}}],server:{host:'127.0.0.1',port:0,watch:{ignored:['**/.next/**','**/dist/**']}}});
 await server.listen();base=`http://127.0.0.1:${server.httpServer.address().port}`;browser=await chromium.launch();
});

for(const width of [360,416,640,1280]) test(`Media picker, upload retry and thumbnail gallery at ${width}px`,{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width,height:900}});
 const posts=[],errors=[],external=[];
 const assets=Array.from({length:8},(_,index)=>({id:`synthetic-image-${index}`,alt:index===4?'A-long-synthetic-caption-without-spaces-'.repeat(4):`Synthetic landscape ${index+1}`,preview:index===7?null:`${base}/fixture-media-${index}.svg`}));
 const file={name:'A synthetic image with a long filename for the phone gallery.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=','base64')};
 let releaseFailure,releaseSuccess;
 const failureGate=new Promise(resolve=>{releaseFailure=resolve;}),successGate=new Promise(resolve=>{releaseSuccess=resolve;});
 try {
  await context.addInitScript(()=>{Object.defineProperty(navigator,'clipboard',{value:{writeText:async value=>{window.copiedAdminReference=value;}}});});
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url());
   if(url.origin!==base){external.push(request.url());return route.abort();}
   if(url.pathname.startsWith('/fixture-media-')){
    const index=Number(url.pathname.match(/(\d+)\.svg$/)[1]);
    return route.fulfill({contentType:'image/svg+xml',body:`<svg xmlns="http://www.w3.org/2000/svg" width="${index%2?800:1200}" height="${index%2?1200:800}" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"><rect width="1200" height="800" fill="${['#403E35','#B35A35','#7B8171','#786552'][index%4]}"/><circle cx="900" cy="180" r="100" fill="#F1EFE8"/><path d="M0 800 380 240 760 800 980 420 1200 800" fill="#191813"/></svg>`});
   }
   if(!url.pathname.startsWith('/os/admin/'))return route.continue();
   assert.equal(request.headers().authorization,'Bearer synthetic-token');
   if(url.pathname.endsWith('/status'))return route.fulfill({json:{admin:true}});
   if(url.pathname.endsWith('/catalog'))return route.fulfill({json:[]});
   if(url.pathname.endsWith('/media')&&request.method()==='GET')return route.fulfill({json:assets});
   if(url.pathname.endsWith('/media')&&request.method()==='POST'){
    const form=await new Request(request.url(),{method:'POST',headers:request.headers(),body:request.postDataBuffer()}).formData(),image=form.get('image');
    posts.push({id:form.get('id'),alt:form.get('alt'),name:image.name,type:image.type,bytes:[...new Uint8Array(await image.arrayBuffer())]});
    if(posts.length===1){await failureGate;return route.fulfill({status:503,json:{error:'Synthetic upload failed. Keep the file and retry.'}});}
    await successGate;assets.unshift({id:'synthetic-upload',alt:form.get('alt'),preview:`${base}/fixture-media-8.svg`});return route.fulfill({json:{saved:true}});
   }
   return route.abort();
  });
  const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
  await page.goto(`${base}/fixture`);await page.getByRole('button',{name:'Media',exact:true}).click();
  const choose=page.getByRole('button',{name:'Choose file',exact:true}),upload=page.getByRole('button',{name:'Upload image',exact:true}),alt=page.getByLabel('Alternative text'),gallery=page.getByRole('region',{name:'Image library'});
  await expect(gallery.locator('figure')).toHaveCount(8);await expect(upload).toBeDisabled();
  await expect(upload).toHaveCSS('background-color','rgb(227, 107, 55)');await expect(choose).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
  await expect(upload).toHaveCSS('font-weight','700');await expect(choose).toHaveCSS('font-weight','700');
  await expect(page.getByText('No file chosen',{exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Media',exact:true}).focus();await page.keyboard.press('Tab');await expect(choose).toBeFocused();await expect(choose).toHaveCSS('outline-style','solid');
  const chooserOpened=page.waitForEvent('filechooser');await choose.click();const chooser=await chooserOpened;
  assert.equal(chooser.isMultiple(),false);await chooser.setFiles(file);
  await expect(page.getByText(file.name,{exact:true})).toBeVisible();await expect(upload).toBeDisabled();assert.equal(posts.length,0);
  await alt.fill('   ');await expect(upload).toBeDisabled();await alt.fill('A synthetic new image.');await expect(upload).toBeEnabled();
  for(const image of await gallery.locator('img').all()){await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate(el=>el.naturalWidth)).toBeGreaterThan(0);}
  const metrics=await gallery.evaluate(el=>({columns:getComputedStyle(el).gridTemplateColumns.split(' ').length,width:el.getBoundingClientRect().width,available:el.closest('.os-app-shell').clientWidth-32,tiles:[...el.querySelectorAll('.os-admin-media-thumbnail')].map(tile=>{const box=tile.getBoundingClientRect();return{width:box.width,height:box.height,top:box.top};}),fits:[...el.querySelectorAll('img')].map(img=>getComputedStyle(img).objectFit),overflow:document.documentElement.scrollWidth>innerWidth}));
  const columns=width<640?3:4;assert.equal(metrics.columns,columns);assert.equal(metrics.overflow,false);
  assert.ok(Math.abs(metrics.width-metrics.available)<1,'gallery fills the real app shell between its existing gutters');
  for(const tile of metrics.tiles)assert.ok(Math.abs(tile.width-tile.height)<1,JSON.stringify(tile));
  for(const tile of metrics.tiles.slice(0,columns))assert.ok(Math.abs(tile.top-metrics.tiles[0].top)<1);
  assert.ok(metrics.tiles[columns].top>metrics.tiles[0].top);assert.ok(metrics.fits.every(fit=>fit==='cover'));
  for(const button of [choose,upload,...await gallery.getByRole('button').all()]){const box=await button.boundingBox();assert.ok(box.width>=44&&box.height>=44,JSON.stringify(box));}
  await expect(gallery.getByText('Preview unavailable',{exact:true})).toBeVisible();
  await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`outputs/admin-media-${width}${useProductionCSS?'-production':''}.png`,fullPage:true});
  await upload.click();const busy=page.getByRole('button',{name:'Uploading…',exact:true});await expect(busy).toBeDisabled();await expect(choose).toBeDisabled();await expect(alt).toBeDisabled();await expect.poll(()=>posts.length).toBe(1);
  await gallery.getByRole('button').first().click();await expect(page.getByRole('status')).toHaveText('Image reference copied.');assert.equal(await page.evaluate(()=>window.copiedAdminReference),'synthetic-image-0');await expect(busy).toBeDisabled();
  await page.locator('form').evaluate(form=>form.requestSubmit());releaseFailure();
  await expect(page.getByRole('status')).toHaveText('Synthetic upload failed. Keep the file and retry.');
  await expect(page.getByText(file.name,{exact:true})).toBeVisible();await expect(alt).toHaveValue('A synthetic new image.');await expect(upload).toBeEnabled();
  await upload.click();await expect.poll(()=>posts.length).toBe(2);assert.deepEqual(posts[1],posts[0]);assert.match(posts[0].id,/^[0-9a-f-]{36}$/);assert.equal(posts[0].name,file.name);assert.equal(posts[0].type,file.mimeType);assert.deepEqual(posts[0].bytes,[...file.buffer]);
  releaseSuccess();await expect(page.getByRole('status')).toHaveText('Image uploaded.');await expect(gallery.locator('figure')).toHaveCount(9);await expect(alt).toHaveValue('');await expect(upload).toBeDisabled();await expect(choose).toBeEnabled();
  await expect(page.getByText('No file chosen',{exact:true})).toBeVisible();assert.equal(await page.locator('input[type=file]').evaluate(el=>el.files.length),0);
  await page.reload();await page.getByRole('button',{name:'Media',exact:true}).click();await expect(gallery.locator('figure')).toHaveCount(9);
  const reselectOpened=page.waitForEvent('filechooser');await choose.click();await(await reselectOpened).setFiles(file);await expect(page.getByText(file.name,{exact:true})).toBeVisible();
  console.log('Media gallery',width,JSON.stringify(metrics));assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 } finally {releaseFailure();releaseSuccess();await context.close();}
});
test('late decoded Admin drafts never enter the next account cache', {timeout:90000}, async()=>{
 const context=await browser.newContext();
 try {
  await context.addInitScript(()=>{
   const native=window.fetch.bind(window);
   window.fetch=async(...args)=>{
    const response=await native(...args);
    if(String(args[0]).endsWith('/os/admin/catalog')) {
     const json=response.json.bind(response);
     response.json=async()=>{const value=await json();window.adminBodyWaiting=true;await new Promise(resolve=>{window.releaseAdminBody=resolve;});return value;};
    }
    return response;
   };
  });
  const draft=createChapterDraft();draft.draftId='synthetic-late-admin';
  await context.route('**/*',route=>{
   const url=new URL(route.request().url());if(url.origin!==base)return route.abort();
   if(url.pathname.endsWith('/os/admin/status'))return route.fulfill({json:{admin:true}});
   if(url.pathname.endsWith('/os/admin/catalog'))return route.fulfill({json:[{id:draft.draftId,draft,revision:1}]});
   return route.continue();
  });
  const page=await context.newPage();await page.goto(`${base}/fixture`);
  await page.waitForFunction(()=>window.adminBodyWaiting);
  await page.evaluate(()=>{window.adminSwitch('synthetic-other');window.releaseAdminBody();});
  await expect(page.getByText('Could not open shared drafts. Existing device copies are retained.')).toBeVisible();
  const contaminated=await page.evaluate(()=>Object.keys(localStorage).filter(key=>key.startsWith('circle-admin:synthetic-other:')));
  assert.deepEqual(contaminated,[]);
 } finally {await context.close();}
});
after(async()=>{await browser?.close();await server?.close();});
for(const width of [360,1280]) test(`account Admin draft recovery and media at ${width}px`,{timeout:90000},async()=>{
 const context=await browser.newContext({viewport:{width,height:900}});let rows=[],fail=false;const errors=[];
 try{
 await context.route('**/*',route=>{const url=new URL(route.request().url());if(url.origin!==base)return route.abort();if(!url.pathname.startsWith('/os/admin/'))return route.continue();assert.equal(route.request().headers().authorization,'Bearer synthetic-token');
 if(url.pathname.endsWith('/status'))return route.fulfill({json:{admin:true}});
 if(url.pathname.endsWith('/media'))return route.fulfill({json:[]});
 if(route.request().method()==='GET')return route.fulfill({json:rows});
 if(fail)return route.fulfill({status:503,json:{error:'Synthetic connection failure. Device copy retained.'}});
 const data=route.request().postDataJSON();rows=[{id:data.draft.draftId,draft:data.draft,revision:1}];return route.fulfill({json:{revision:1}});
 });
 const page=await context.newPage();page.on('pageerror',error=>{errors.push(error.message);process.stderr.write(error.stack+'\n');});
 await page.goto(`${base}/fixture`);await page.getByRole('button',{name:'Blank chapter',exact:true}).click();
 await page.getByRole('button',{name:'Save draft',exact:true}).click();await expect(page.getByText('Saved online',{exact:true})).toBeVisible();assert.equal(rows.length,1);
 await page.locator('details').evaluateAll(elements=>elements.forEach(el=>el.open=true));await page.getByLabel('Title',{exact:true}).fill('Recovered synthetic title');
 fail=true;await page.getByRole('button',{name:'Save draft',exact:true}).click();await expect(page.getByText(/Synthetic connection failure/)).toBeVisible();
 assert.ok(await page.evaluate(()=>Object.keys(localStorage).some(key=>key.startsWith('circle-admin-recovery:synthetic-admin:'))));
 await page.reload();await page.getByLabel('Search',{exact:true}).fill('Recovered synthetic title');await page.locator('details').evaluateAll(elements=>elements.forEach(el=>el.open=true));await expect(page.locator('.os-admin-draft-open')).toHaveCount(1);await page.locator('.os-admin-draft-open').click();await page.locator('details').evaluateAll(elements=>elements.forEach(el=>el.open=true));await expect(page.getByLabel('Title',{exact:true})).toHaveValue('Recovered synthetic title');
 await page.getByRole('button',{name:'Media',exact:true}).click();await expect(page.getByRole('heading',{name:'Media',exact:true})).toBeVisible();await expect(page.getByLabel('Alternative text')).toBeVisible();
 assert.ok(await page.getByRole('button',{name:'Upload image'}).evaluate(el=>el.getBoundingClientRect().height)>=44);
 assert.deepEqual(errors,[]);
 }finally{await context.close();}
});
