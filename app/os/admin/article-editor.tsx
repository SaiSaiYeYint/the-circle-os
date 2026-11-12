"use client";
import { useEffect, useState } from 'react';
import type { ChapterDraft } from './chapter-authoring.js';
import { createChapterDraft } from './chapter-authoring.js';
import { ContentFigure, ContentImagePicker, type ContentImage } from './content-media';
type Block = { id:string; type:'heading'|'paragraph'|'image'; text:string; image?:ContentImage };
export type ArticleDraft = ChapterDraft & { article: { title:string; summary:string; cover?:ContentImage; blocks:Block[] } };
type Repository = { read():Promise<ChapterDraft[]>; write(draft:ChapterDraft):Promise<unknown>; recover?(draft:ChapterDraft):void };
function fresh():ArticleDraft { const base = createChapterDraft(); return {...base,draftId:`article-${crypto.randomUUID()}`,article:{title:'Untitled article',summary:'',blocks:[]}}; }
export function ArticleEditor({ repository }: { repository:Repository }) {
  const [draft,setDraft] = useState<ArticleDraft>(fresh);
  const [library,setLibrary] = useState<ArticleDraft[]>([]);
  const [message,setMessage] = useState('Opening articles…');
  const [ready,setReady] = useState(false);
  const [busy,setBusy] = useState(false);
  useEffect(() => { let active=true; void repository.read().then(rows => { if (!active) return; const articles=rows.filter(row => 'article' in row) as ArticleDraft[]; setLibrary(articles); if (articles.length) setDraft(articles[0]); setReady(true); setMessage(''); }).catch(() => { if(active) setMessage('Could not open drafts. Retry by reopening Articles.'); }); return () => {active=false;}; },[repository]);
  useEffect(() => { if(ready) { try { repository.recover?.(draft); } catch { /* Save reports unavailable device storage. */ } } },[draft,ready,repository]);
  function change(edit:(next:ArticleDraft)=>void) { setDraft(current => {const next=structuredClone(current); edit(next); next.updatedAt=new Date().toISOString(); next.chapter.title=next.article.title; return next;}); setMessage('Unsaved changes'); }
  async function save() { if(busy) return; const snapshot=structuredClone(draft); setBusy(true); try { await repository.write(snapshot); setLibrary(rows=>[snapshot,...rows.filter(row=>row.draftId!==snapshot.draftId)]); setMessage('Saved online'); } catch(error) {setMessage(error instanceof Error?error.message:'Could not save. Device copy retained.');} finally {setBusy(false);} }
  if(!ready) return <p role="status">{message}</p>;
  const valid=Boolean(draft.article.title.trim()) && (!draft.article.cover || Boolean(draft.article.cover.alt.trim())) && draft.article.blocks.every(block=>block.type==='image'?Boolean(block.image?.alt.trim()):Boolean(block.text.trim()));
  return <main className="os-admin"><h1>Articles</h1><p role="status">{message}</p>
    <div className="os-admin-actions"><button disabled={busy} onClick={()=>{setDraft(fresh());setMessage('New article');}}>New article</button><label className="os-admin-field">Saved article<select disabled={busy} value={draft.draftId} onChange={event=>{const row=library.find(item=>item.draftId===event.target.value);if(row)setDraft(row);}}><option value="">Choose an article</option>{library.map(row=><option key={row.draftId} value={row.draftId}>{row.article.title}</option>)}</select></label></div>
    <fieldset disabled={busy} className="os-admin-panel os-admin-fields"><h2>Cover image</h2><ContentImagePicker value={draft.article.cover} onChange={image=>change(next=>{next.article.cover=image;})}/><label className="os-admin-field">Title<input value={draft.article.title} onChange={event=>change(next=>{next.article.title=event.target.value;})}/></label><label className="os-admin-field">Summary<textarea aria-label="Summary" value={draft.article.summary} onChange={event=>change(next=>{next.article.summary=event.target.value;})}/></label>
    {draft.article.blocks.map((block,index)=><section key={block.id} aria-label={`Block ${index+1}`}><h3>{block.type}</h3>{block.type==='image'?<ContentImagePicker value={block.image} onChange={image=>change(next=>{next.article.blocks[index].image=image;})}/>:<label className="os-admin-field">Block text<textarea aria-label="Block text" value={block.text} onChange={event=>change(next=>{next.article.blocks[index].text=event.target.value;})}/></label>}<div className="os-admin-actions"><button disabled={!index} onClick={()=>change(next=>{[next.article.blocks[index-1],next.article.blocks[index]]=[next.article.blocks[index],next.article.blocks[index-1]];})}>Move earlier</button><button disabled={index===draft.article.blocks.length-1} onClick={()=>change(next=>{[next.article.blocks[index],next.article.blocks[index+1]]=[next.article.blocks[index+1],next.article.blocks[index]];})}>Move later</button><button onClick={()=>change(next=>{next.article.blocks.splice(index,1);})}>Remove block</button></div></section>)}
    <div className="os-admin-actions">{(['heading','paragraph','image'] as const).map(type=><button key={type} onClick={()=>change(next=>{next.article.blocks.push({id:crypto.randomUUID(),type,text:''});})}>Add {type}</button>)}</div><button disabled={!valid||busy} onClick={()=>void save()}>{busy?'Saving…':'Save article'}</button></fieldset>
    <h2>Preview</h2><ArticlePreview draft={draft}/>
  </main>;
}
export function ArticlePreview({draft}:{draft:ArticleDraft}) { return <article className="os-content-glass os-article-preview"><ContentFigure image={draft.article.cover}/><h1>{draft.article.title}</h1><p>{draft.article.summary}</p>{draft.article.blocks.map(block=>block.type==='image'?<ContentFigure key={block.id} image={block.image}/>:block.type==='heading'?<h2 key={block.id}>{block.text}</h2>:<p key={block.id}>{block.text}</p>)}</article>; }
