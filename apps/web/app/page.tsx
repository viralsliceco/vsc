import { withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await withAuth({ ensureSignedIn: true });

  if (user) {
    redirect("/home");
  }

  return redirect("/login");
}