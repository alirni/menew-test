import { VideoData } from "@/types";

import foods from '../../public/data/food.json';

export const fetchVideos = async (): Promise<VideoData[]> => {
  return foods.map((food) => food as unknown as VideoData);
};