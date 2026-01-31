"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const COLLECTIONS = [
  {
    title: "floors",
    img: "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg",
  },
  {
    title: "kitchens",
    img: "https://images.pexels.com/photos/3847592/pexels-photo-3847592.jpeg",
  },
  {
    title: "bathrooms",
    img: "https://images.pexels.com/photos/8082549/pexels-photo-8082549.jpeg",
  },
  {
    title: "doors",
    img: "https://images.pexels.com/photos/7533844/pexels-photo-7533844.jpeg",
  },
];

export default function VerticalSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const i = Math.floor(self.progress * COLLECTIONS.length);
            setActiveIndex(Math.min(i, COLLECTIONS.length - 1));
          },
        },
      });

      slidesRef.current.forEach((slide, idx) => {
        if (idx < COLLECTIONS.length - 1) {
          tl.to(slide, {
            clipPath: "inset(0% 0% 100% 0%)",
            ease: "none",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const goToIndex = (idx: number) => {
    const targetY =
      (containerRef.current?.offsetTop || 0) + window.innerHeight * idx;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetY, autoKill: true },
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${COLLECTIONS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-zinc-900">
        <div className="absolute bottom-20 md:right-20 right-5 flex flex-col gap-1 z-[100]">
          {COLLECTIONS.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`cursor-pointer md:text-sm text-xs font-semibold uppercase transition-all duration-300 ${
                idx === activeIndex
                  ? "text-white scale-110"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Slides */}
        {COLLECTIONS.map((slide, idx) => (
          <div
            key={idx}
            ref={(el) => {
              slidesRef.current[idx] = el;
            }}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: COLLECTIONS.length - idx }}
          >
            <div className="w-full h-full relative flex items-center">
              <Image
                src={`${slide.img}?auto=compress&cs=tinysrgb&w=1600`}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 md:ml-20 ml-5 overflow-hidden">
                <p
                  className={`md:text-[12vw] text-[15vw] leading-none text-white capitalize transition-all duration-700 ease-out ${
                    idx === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  {slide.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
