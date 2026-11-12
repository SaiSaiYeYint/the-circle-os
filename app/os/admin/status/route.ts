import { accountAdmin } from '../account-admin-server';
export async function GET(request: Request) {
  try { await accountAdmin(request); return Response.json({ admin: true }, { headers: { 'Cache-Control': 'no-store' } }); }
  catch { return Response.json({ admin: false }, { status: 403, headers: { 'Cache-Control': 'no-store' } }); }
}
