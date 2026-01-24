"use client";
import Image from "next/image";
import Link from "next/link";
import { axios } from "@shared/api";
import { useRouter } from "next/navigation";
import { Button } from "@shared/ui";
import { Typography } from "@shared/ui/typography";

export const Sidebar = () => {
  const { push } = useRouter();

  const onLogoutHandler = async () => {
    await axios.post("/auth/logout");
    push("/signin");
  };

  return (
    <aside className="flex flex-col justify-between w-60 p-6 pb-4 border-r border-gray-200 shadow">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl font-bold">NestGram</h1>
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            Profile
          </Link>
          <Link
            href="/posts"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            Posts
          </Link>
          <Link
            href="/ai-image"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            AI Image
          </Link>
        </nav>
      </div>

      <div className="flex items-center flex-col text-center gap-y-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.yandexcloud.net/images-bucket-for-nest/c0f5c80f-ce5c-460e-a23f-21de8c3a1fb7"
            width={64}
            height={64}
            alt="avatar"
            className="rounded-full"
          />
          <Typography variant="large">Jane Doe</Typography>
        </div>
        <Button variant="primary" onClick={onLogoutHandler}>
          <Typography variant="small">Logout</Typography>
        </Button>
      </div>
    </aside>
  );
};
