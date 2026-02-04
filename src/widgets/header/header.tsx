"use client";
import Image from "next/image";
import Link from "next/link";
import { api } from "@shared/api/client";
import { useRouter } from "next/navigation";
import { Button } from "@shared/ui";
import { Typography } from "@shared/ui/typography";
import { getMe, GetMeResponse } from "@entities";
import { useEffect, useState } from "react";

interface HeaderProps {
  isAuthorized: boolean;
}

export const Header = ({ isAuthorized }: HeaderProps) => {
  const { push } = useRouter();

  const [user, setUser] = useState<GetMeResponse>();
  const onLogoutHandler = async () => {
    await api.post("/auth/logout");
    push("auth/signin");
  };

  useEffect(() => {
    //FIXME: Убрать
    if (isAuthorized) {
      (async () => {
        const user = await getMe();
        setUser(user);
      })();
    }
  }, [isAuthorized]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Typography variant="h3">Nestgram</Typography>

          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition">
              <Typography>Home</Typography>
            </Link>
            <Link href="/" className="hover:text-blue-600 transition">
              <Typography>Profile</Typography>
            </Link>
            <Link href="/" className="hover:text-blue-600 transition">
              <Typography>Posts</Typography>
            </Link>
            <Link href="/" className="hover:text-blue-600 transition">
              <Typography>AI Images</Typography>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://storage.yandexcloud.net/images-bucket-for-nest/c0f5c80f-ce5c-460e-a23f-21de8c3a1fb7"
              width={65}
              height={65}
              alt="avatar"
              className="rounded-full"
            />
            <Typography variant="large" className="font-medium">
              {user?.username ?? "N/A"}
            </Typography>
          </div>

          {!isAuthorized && (
            <Button variant="ghost" onClick={() => push("/auth/signin")}>
              Signin
            </Button>
          )}
          {isAuthorized && (
            <Button variant="ghost" onClick={onLogoutHandler}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
