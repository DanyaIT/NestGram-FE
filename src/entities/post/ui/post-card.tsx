import { CommentInput } from "@features";
import Image from "next/image";

interface PostCardProps {
  username: string;
  avatarUrl?: string;
  imageUrl: string;
  likes: number;
}

export const PostCard = ({
  username,
  avatarUrl,
  imageUrl,
  likes,
}: PostCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {avatarUrl && (
          <Image
            src={avatarUrl}
            width={32}
            height={32}
            className="rounded-full"
            alt={username}
          />
        )}
        <span className="font-semibold">{username}</span>
      </div>
      <Image
        src={imageUrl}
        width={500}
        height={300}
        className="rounded-md"
        alt="Post"
      />
      <div>{likes} likes</div>
      <CommentInput />
    </div>
  );
};
