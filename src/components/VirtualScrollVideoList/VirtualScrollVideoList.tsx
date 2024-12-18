"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { VideoCard } from "../VideoCard";
import { VideoData } from "@/types";
import { fetchVideos } from "@/API/fetchVideos";

const VirtualScrollVideoList: FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
    };
    loadVideos();
  }, []);

  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setListHeight(window.innerHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            console.log("VirtualScrollVideoList.tsx:51 >> entry", {
              entry,
              index,
            });
            setActiveIndex(index);
          }
        });
      },
      { root: null, threshold: 1 } // Trigger when 100% of the card is visible
    );

    return () => observer.current?.disconnect();
  }, []);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (ref.current) {
        observer.current?.observe(ref.current);
      }
      return () => {
        if (ref.current) observer.current?.unobserve(ref.current);
      };
    }, []);

    console.log("VirtualScrollVideoList.tsx:88 >> activeIndex", {
      activeIndex,
      index,
    });
    return (
      <div
        ref={ref}
        data-index={index}
        style={style}
        className="flex justify-center flex-col p-8 pb-0"
      >
        <VideoCard
          videoSrc={videos[index]?.url || ""}
          title={videos[index]?.title || ""}
          isActive={activeIndex === index}
        />
      </div>
    );
  };

  if (videos.length === 0) {
    return <div className="text-center py-20">Loading videos...</div>;
  }

  return (
    <List
      height={listHeight} // Height of the container
      itemCount={videos.length}
      itemSize={320} // Approximate height of each card
      width="100%"
      style={{ border: "4px solid red" }}
    >
      {Row}
    </List>
  );
};

export default VirtualScrollVideoList;
