import { AIImageGenerator } from "@shared";
import { Sidebar, SearchBar } from "@widgets";
import { PostCard } from "@entities";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex-1 flex flex-col">
          <SearchBar />
          <div className="flex flex-col gap-4">
            <PostCard
              username="Jane Doe"
              imageUrl="https://storage.yandexcloud.net/images-bucket-for-nest/c0f5c80f-ce5c-460e-a23f-21de8c3a1fb7"
              likes={1200}
            />
          </div>
        </div>
        <div className="w-100">
          <AIImageGenerator />
        </div>
      </main>
    </div>
  );
}
