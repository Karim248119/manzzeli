"use client";
import COLLECTIONS from "@/data";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Button } from "./Button";
import { Fonts } from "@/lib/fonts";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

export default function VerticalSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollStepVH = 100;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;

      const step = (window.innerHeight * scrollStepVH) / 100;
      const rawProgress = Math.min(
        Math.max(scrolled / step, 0),
        COLLECTIONS.length - 1
      );

      setProgress(rawProgress);
      setActiveIndex(Math.round(rawProgress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollStepVH]);

  // 👇 gsap-powered scroll navigation
  const goToIndex = (idx: number) => {
    const step = (window.innerHeight * scrollStepVH) / 100;
    const targetY = idx * step;

    gsap.to(window, {
      duration: 1, // adjust speed
      ease: "power2.inOut",
      scrollTo: {
        y: (containerRef.current?.offsetTop || 0) + targetY,
        autoKill: true,
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${COLLECTIONS.length * scrollStepVH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sidebar navigation */}
        <div className="absolute bottom-20 right-20 flex flex-col gap-1 justify-start items-start z-50">
          {COLLECTIONS.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`cursor-pointer text-sm font-semibold uppercase transition-colors ${
                idx === activeIndex ? "text-white" : "text-white/50"
              }`}
            >
              {slide.title}
            </button>
          ))}
          <Link href={`/${COLLECTIONS[activeIndex].title}`}>
            <Button className="-ml-4 mt-10">Show All Products</Button>
          </Link>
        </div>
        {COLLECTIONS.map((slide, idx) => {
          const start = idx;
          const end = idx + 1;

          let height = 0;
          if (progress >= start && progress <= end) {
            const frac = progress - start;
            height = (1 - frac) * window.innerHeight;
          } else if (progress > end) {
            height = 0;
          } else if (progress < start) {
            height = window.innerHeight;
          }

          if (progress > idx - 1 && progress < idx) {
            const frac = progress - (idx - 1);
            height = frac * window.innerHeight;
          }

          return (
            <div
              key={idx}
              className="sticky top-0 left-0 w-full overflow-hidden"
              style={{ height }}
            >
              <div
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-full relative flex items-center"
              >
                <div className="w-full h-full absolute top-0 left-0 bg-black/50" />
                <p
                  className={`ml-20 text-[12vw] relative z-10 text-white capitalize overflow-hidden duration-1000 ${
                    idx === activeIndex
                      ? "opacity-100 h-[30vh]"
                      : "opacity-0 h-0"
                  } ${Fonts.serif.className}`}
                >
                  {slide.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
