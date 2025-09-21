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
            <Typo fixed font="serif" className="md:text-8xl text-4xl">
              Explore our palette
            </Typo>
          </div>

          <div className="w-full h-[50vh] grid grid-cols-4">
            {[100, 200, 300, 400].map((item) => (
              <div
                key={item}
                className="w-full h-[50vh] p-5 md:ring-32 ring-10 ring-primary ring-inset border"
              />
            ))}
          </div>

          <div className="w-full h-[25vh] bg-primary z-10 flex md:flex-row flex-col justify-center items-center md:gap-20 gap-3 ">
            {PalleteItems.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center md:gap-2 gap-1 w-1/2 md:w-auto -mr-10 md:mr-0"
              >
                <div
                  className={`relative md:w-4 w-3 aspect-square rounded-full border duration-500
                    
                    ${activeIndex === index && "scale-90 bg-black"}
                    
                    `}
                ></div>
                <Typo fixed font="base" className="md:text-xl text-xs">
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
