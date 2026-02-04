import { SearchBar } from "@widgets";
import { PostCard } from "@entities";
import { AIImageGenerator } from "@shared/ui";

export default function HomePage() {
  return (
    <div className="p-6 flex gap-6">
      <section className="flex-1 flex flex-col gap-y-4">
        <SearchBar />
        <PostCard
          imageUrl="https://storage.yandexcloud.net/images-bucket-for-nest/c0f5c80f-ce5c-460e-a23f-21de8c3a1fb7"
          likes={1200}
        />
      </section>

      <aside className="w-[360px]">
        <AIImageGenerator />
      </aside>
    </div>
  );
}
