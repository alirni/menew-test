import { FC, useEffect, useRef } from "react";
import { VideoCardProps } from "./VideoCard.type";

const VideoCard: FC<VideoCardProps> = ({ videoSrc, isActive, title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play();
      timeoutId = setTimeout(() => {
        videoRef.current?.pause();
      }, 5000); // Play for 5 seconds
    } else {
      videoRef.current?.pause();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isActive]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-800">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
        <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
