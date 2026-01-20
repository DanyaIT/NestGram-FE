import { NextRequest, NextResponse } from "next/server";
import { getBaseUrl } from "@shared/api/utils";

export const config = {
  matcher: ["/((?!signin|signup|_next|favicon.ico).*)"],
};

export default async function proxy(req: NextRequest) {
  console.log(req.cookies);

  const access_token = req.cookies.get("access_token")?.value;

  if (access_token) {
    const validate = await fetch(`${getBaseUrl()}/auth/validate`, {
      headers: {
        cookie: `access_token=${access_token}`,
      },
    });

    if (validate.ok) {
      return NextResponse.next();
    }
  }

  const refresh_token = req.cookies.get("refresh_token")?.value;

  if (!refresh_token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const refresh = await fetch(`${getBaseUrl()}/auth/refresh`, {
    method: "POST",
    headers: {
      cookie: `refresh_token=${refresh_token}`,
    },
  });

  if (refresh.ok) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/signin", req.url));
}
