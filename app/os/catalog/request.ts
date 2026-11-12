"use client";
import { useContext, useCallback, useState } from 'react';
import { SupabaseConnection } from '../auth/supabase-context';
import { getAccountScope, assertAccountScope } from '../account-scope';
export function useCatalogRequest() {
 const connection=useContext(SupabaseConnection);
 const [scope]=useState(getAccountScope);
 return useCallback(async (input:RequestInfo|URL,init?:RequestInit)=>{
  assertAccountScope(scope);
  const session=(await connection?.client.auth.getSession())?.data.session;
  assertAccountScope(scope);
  if(scope.kind!=='account'||session?.user.id!==scope.accountId) throw new Error('Sign in required');
  const headers=new Headers(init?.headers);headers.set('Authorization',`Bearer ${session.access_token}`);
  const response=await fetch(input,{...init,headers,cache:'no-store',signal:AbortSignal.any([scope.signal,AbortSignal.timeout(30000)])});
  assertAccountScope(scope); return response;
 },[scope,connection]);
}
