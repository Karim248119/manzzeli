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
  const [innerHeight, setInnerHeight] = useState(0); // store client height

  const scrollStepVH = 100;

  useEffect(() => {
    setInnerHeight(window.innerHeight); // safe in browser

    const handleResize = () => setInnerHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!innerHeight) return; // don’t run until ready
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;

      const step = (innerHeight * scrollStepVH) / 100;
      const rawProgress = Math.min(
        Math.max(scrolled / step, 0),
        COLLECTIONS.length - 1
      );

      setProgress(rawProgress);
      setActiveIndex(Math.round(rawProgress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [innerHeight, scrollStepVH]);

  const goToIndex = (idx: number) => {
    if (!innerHeight) return;
    const step = (innerHeight * scrollStepVH) / 100;
    const targetY = idx * step;

    gsap.to(window, {
      duration: 1,
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
        <div className="absolute bottom-20 md:right-20 right-5 flex flex-col gap-1 z-50">
          {COLLECTIONS.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`cursor-pointer md:text-sm text-xs font-semibold uppercase transition-colors ${
                idx === activeIndex ? "text-white" : "text-white/50"
              }`}
            >
              {slide.title}
            </button>
          ))}
          <Link href={`/${COLLECTIONS[activeIndex].title}`}>
            <Button className="md:-ml-4 md:mt-10 mt-4">
              Show All Products
            </Button>
          </Link>
        </div>

        {COLLECTIONS.map((slide, idx) => {
          if (!innerHeight) return null; // avoid SSR crash

          const start = idx;
          const end = idx + 1;
          let height = 0;

          if (progress >= start && progress <= end) {
            const frac = progress - start;
            height = (1 - frac) * innerHeight;
          } else if (progress > end) {
            height = 0;
          } else if (progress < start) {
            height = innerHeight;
          }

          if (progress > idx - 1 && progress < idx) {
            const frac = progress - (idx - 1);
            height = frac * innerHeight;
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
                  className={`md:ml-20 ml-5 md:text-[12vw] text-[15vw] relative z-10 text-white capitalize overflow-hidden duration-1000 ${
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
