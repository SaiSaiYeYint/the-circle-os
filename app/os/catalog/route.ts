import { catalogAccount } from './server';
export async function GET(request:Request) {
 try {
  const {url,headers}=await catalogAccount(request), query=new URL(request.url).searchParams;
  const response=await fetch(`${url}/rest/v1/rpc/circle_catalog_read`,{method:'POST',headers,body:JSON.stringify({item:query.get('id'),edition:query.get('version')?Number(query.get('version')):null}),cache:'no-store',signal:AbortSignal.timeout(12000)});
  if(!response.ok) return Response.json({error:'Catalog unavailable'},{status:503});
  const data=await response.json();
  return Response.json(data,{status:data===null?404:200,headers:{'Cache-Control':'private, no-store'}});
 } catch {return Response.json({error:'Sign in required'},{status:403});}
}
