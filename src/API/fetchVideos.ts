import { VideoData } from "@/types";

export const fetchVideos = async (): Promise<VideoData[]> => {
  // Mocking an API call
  return Array.from({ length: 50 }, (_, i) => ({
    id: `video-${i + 1}`,
    url: `https://www.w3schools.com/html/mov_bbb.mp4?video=${i + 1}`,
  }));
};