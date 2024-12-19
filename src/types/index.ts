export type Media = {
  id: number;
  videos: {
    medium: { url: string; title: string; thumbnail: string };
  };
  tags: string;
}[];

export interface PixabayVideoResponse {
  id: number;
  videos: {
    medium: { url: string; thumbnail: string };
  };
  tags: string;
}

export interface PixabayResponse<T> {
  hits: T[];
}