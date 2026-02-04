import { cookies } from "next/headers";

export async function getAuth() {
  const cookie = await cookies();
  const token = cookie.get("access_token")?.value;

  return { isAuthorized: !!token };
}
