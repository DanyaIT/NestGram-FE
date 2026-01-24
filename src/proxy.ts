import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!signin|signup|_next|favicon.ico).*)"],
};

export default async function proxy(req: NextRequest) {
  const access_token = req.cookies.get("access_token")?.value;

  if (access_token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/signin", req.url));
}
