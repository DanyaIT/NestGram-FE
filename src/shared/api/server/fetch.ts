import { cookies } from "next/headers";
import { getBaseUrl } from "../utils";

export async function serverFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T | null> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${getBaseUrl()}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(cookieHeader && { Cookie: cookieHeader }),
        ...options.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`ServerFetch error: ${res.status} ${await res.text()}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
