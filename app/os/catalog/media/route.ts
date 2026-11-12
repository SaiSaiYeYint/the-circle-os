import { catalogAccount } from '../server';
export async function GET(request:Request) {
 try {
  const {url,headers}=await catalogAccount(request), id=new URL(request.url).searchParams.get('id');
  if(!id||!/^[0-9a-f-]{36}$/i.test(id)) return Response.json({error:'Invalid image'},{status:400});
  const response=await fetch(`${url}/storage/v1/object/sign/circle-content/${id}`,{method:'POST',headers,body:JSON.stringify({expiresIn:300}),cache:'no-store',signal:AbortSignal.timeout(12000)});
  if(!response.ok) return Response.json({error:'Image unavailable'},{status:404});
  const data=await response.json();
  return Response.json({preview:`${url}/storage/v1${data.signedURL}`},{headers:{'Cache-Control':'private, no-store'}});
 } catch {return Response.json({error:'Sign in required'},{status:403});}
}
