/** Account Admin uses the caller's token, never the quote service key. */
export async function accountAdmin(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const token = request.headers.get('authorization');
  if (!url || !key || !token?.startsWith('Bearer ')) throw new Error('Admin access required.');
  const headers = { apikey: key, Authorization: token, 'Content-Type': 'application/json' };
  const user = await fetch(`${url}/auth/v1/user`, { headers, cache: 'no-store', signal: AbortSignal.timeout(12000) });
  const identity = user.ok ? await user.json() : null;
  if (!identity?.id || !identity.email_confirmed_at) throw new Error('Admin access required.');
  const role = await fetch(`${url}/rest/v1/rpc/circle_content_admin`, { method: 'POST', headers, body: '{}', cache: 'no-store', signal: AbortSignal.timeout(12000) });
  if (!role.ok || await role.json() !== true) throw new Error('Admin access required.');
  return { url, headers, accountId: identity.id as string };
}
