import { VirtualScrollVideoList } from "@/components/VirtualScrollVideoList";

export default function Home() {
  return (
    <main
      style={{ border: "4px solid red" }}
      className="flex flex-col gap-4 row-start-2 items-center h-full sm:items-start"
    >
      <VirtualScrollVideoList />
    </main>
  );
}
