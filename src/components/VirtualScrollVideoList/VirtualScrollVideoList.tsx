"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { VideoCard } from "../VideoCard";
import { Media } from "@/types";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/const";

const VirtualScrollVideoList: FC<{
  media: Media;
}> = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const { breakpoint } = useBreakpoint(
    BREAKPOINTS,
    "mobile"
  );

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

    return (
      <div
        ref={ref}
        data-index={index}
        style={style}
        className="flex justify-center flex-col px-1 md:p-8 md:pb-0"
      >
        <VideoCard
          videoSrc={media[index]?.videos.medium.url || ""}
          videoImage={media[index]?.videos.medium.thumbnail || ""}
          title={media[index]?.videos.medium.title || ""}
          isActive={activeIndex === index}
        />
      </div>
    );
  };

  if (media.length === 0) {
    return <div className="text-center py-20">Loading videos...</div>;
  }

  return (
    <List
      height={listHeight} // Height of the container
      itemCount={media.length}
      itemSize={320} // Approximate height of each card
      width={breakpoint === 'mobile' ? '100%' : '50%'}
      style={{ margin: "auto" }}
    >
      {Row}
    </List>
  );
};

export default VirtualScrollVideoList;
