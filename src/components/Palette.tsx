"use client";
import React, { useEffect, useState, useRef } from "react";
import Typo from "./Typo";
import { PalleteItems } from "@/data/floor";
import Image from "next/image";
import { PiCircle, PiCircleHalfTiltLight, PiCircleLight } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Palette() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const totalSections = PalleteItems.length - 1;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        // progress: 0 → 1 across the container
        const progress = self.progress;
        // Map progress to number of 50vh sections
        const newIndex = Math.floor(progress * totalSections);
        setActiveIndex(newIndex);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full py-20 bg-primary">
      <div ref={containerRef} className="w-full h-[200vh] relative">
        {PalleteItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-[50vh] grid grid-cols-4 absolute left-0"
            style={{ bottom: `${index * 50 + 25}vh` }}
          >
            {item.collection.map((item) => (
              <div key={item.img} className="w-full h-[50vh]">
                <Image
                  width={500}
                  height={500}
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}

        <div className="sticky top-0 left-0 w-full h-[100vh] z-10 flex flex-col justify-center items-center">
          <div className="w-full h-[25vh] bg-primary z-10 flex justify-center items-center">
            <Typo fixed font="serif" className="text-8xl">
              Explore our palette
            </Typo>
          </div>

          <div className="w-full h-[50vh] grid grid-cols-4">
            {[100, 200, 300, 400].map((item) => (
              <div
                key={item}
                className="w-full h-[50vh] p-5 ring-32 ring-primary ring-inset border"
              />
            ))}
          </div>

          <div className="w-full h-[25vh] bg-primary z-10 flex justify-center items-center gap-20">
            {PalleteItems.map((item, index) => (
              <div key={item.title} className="flex items-center gap-1">
                <div className="relative w-4 h-4">
                  <PiCircleHalfTiltLight
                    className={`absolute bottom-0 left-0 duration-200 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <PiCircleLight
                    className={`absolute top-0 left-0 duration-200 ${
                      index === activeIndex ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>
                <Typo fixed font="base" className="text-xl">
                  {item.title}
                </Typo>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
