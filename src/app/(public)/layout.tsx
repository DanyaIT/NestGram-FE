import { getAuth } from "@features/auth/model";
import { Header, Footer } from "@widgets";
import type { ReactNode } from "react";

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthorized } = await getAuth();
  return (
    <>
      <Header isAuthorized={isAuthorized} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
