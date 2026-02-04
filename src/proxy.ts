import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!auth|_next|favicon.ico|$).*)"],
};

export default async function proxy(req: NextRequest) {
  const refresh_token = req.cookies.get("refresh_token")?.value;

  if (!refresh_token) {
    return NextResponse.redirect(new URL("auth/signin", req.url));
  }

  return NextResponse.next();
}
