import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, adminAccessTokenMatches } from "./admin-access";
import { ChapterEditor } from "./chapter-editor";
import { AccountAdmin } from "./account-admin";

export default async function CircleOSAdmin() {
  if (process.env.NEXT_PUBLIC_CIRCLE_AUTH_MODE === "supabase") return <AccountAdmin />;
  const cookieStore = await cookies();
  const authorized = adminAccessTokenMatches(
    cookieStore.get(ADMIN_COOKIE)?.value,
  );
  if (!authorized) {
    redirect("/os");
  }
  return <ChapterEditor />;
}
