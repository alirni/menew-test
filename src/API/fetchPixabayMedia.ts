import { Media, PixabayResponse, PixabayVideoResponse } from "@/types";

export const fetchPixabayMedia = async (): Promise<Media> => {
  const perPage = 50;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PIXABAY_BASE_URL}/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=food&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch videos from Pixabay.");
    }

    const videoData: PixabayResponse<PixabayVideoResponse> =
      await response.json();
    return videoData.hits.map((vid) => ({
      id: vid.id,
      videos: {
        medium: {
          url: vid.videos?.medium.url,
          title: "Food Video",
          thumbnail: vid.videos?.medium.thumbnail,
        },
      },
      tags: vid.tags,
    }));
  } catch (error) {
    throw error
  }
};