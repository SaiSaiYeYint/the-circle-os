"use client";
import { useContext, useEffect, useState } from 'react';
import { SupabaseConnection } from '../auth/supabase-context';
import { assertAccountScope, getAccountScope } from '../account-scope';
export function AdminMenuLink() {
  const connection = useContext(SupabaseConnection);
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const scope = getAccountScope();
    void (async () => {
      if (!connection || scope.kind !== 'account') return;
      const { data } = await connection.client.auth.getSession();
      assertAccountScope(scope);
      if (data.session?.user.id !== scope.accountId) return;
      const response = await fetch('/os/admin/status', { headers:{Authorization:`Bearer ${data.session.access_token}`}, cache:'no-store', signal:AbortSignal.any([controller.signal,scope.signal]) });
      assertAccountScope(scope);
      if (!controller.signal.aborted) setAllowed(response.ok);
    })().catch(() => {});
    return () => controller.abort();
  }, [connection]);
  return allowed ? <button type="button" onClick={() => location.assign('/os/admin')}>Admin</button> : null;
}
