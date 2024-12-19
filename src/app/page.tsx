import { fetchPixabayMedia } from "@/API/fetchPixabayMedia";
import { VirtualScrollVideoList } from "@/components/VirtualScrollVideoList";

export default async function Home() {
  const media = await fetchPixabayMedia();
  

  return (
    <main>
      <VirtualScrollVideoList media={media} />
    </main>
  );
}
