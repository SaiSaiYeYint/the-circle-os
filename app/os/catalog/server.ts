export async function catalogAccount(request: Request) {
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 const token=request.headers.get('authorization');
 if(!url||!key||!token?.startsWith('Bearer ')) throw new Error('Sign in required');
 const headers={apikey:key,Authorization:token,'Content-Type':'application/json'};
 const response=await fetch(`${url}/auth/v1/user`,{headers,cache:'no-store',signal:AbortSignal.timeout(12000)});
 const user=response.ok?await response.json():null;
 if(!user?.id||!user.email_confirmed_at) throw new Error('Sign in required');
 return {url,headers};
}
