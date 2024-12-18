import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <main
      style={{ border: "4px solid red" }}
      className="p-4 flex flex-col gap-4 row-start-2 items-center h-full md:p-8 sm:items-start "
    >
      <VideoCard />
      <div className="relative border p-2 rounded-lg w-full bg-gradient-to-t from-gray-600 via-transparent to-transparent">
        <p className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          Gradient Text
        </p>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
      <div className="border p-2 rounded-lg w-full">
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
      <div className="border p-2 rounded-lg w-full">
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
      <div className="border p-2 rounded-lg w-full">sss</div>
      <div className="border p-2 rounded-lg w-full">sss</div>
      <div className="border p-2 rounded-lg w-full">
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
      <div className="border p-2 rounded-lg w-full">
        <div>ddd</div>
        <div>ddd</div>
        <div>ddd</div>
      </div>
      <div className="border p-2 rounded-lg w-full">sss</div>
    </main>
  );
}
