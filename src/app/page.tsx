import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <main
      style={{ border: "4px solid red" }}
      className="p-4 flex flex-col gap-4 row-start-2 items-center h-full md:p-8 sm:items-start overflow-auto"
    >
      <VideoCard />
      <VideoCard />

      <VideoCard />
      <VideoCard />
      <VideoCard />
    </main>
  );
}
