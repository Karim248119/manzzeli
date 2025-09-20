"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typo from "./Typo";

gsap.registerPlugin(ScrollTrigger);

export default function ParallexImg({
  src,
  className,
  imgClassName,
}: {
  src: StaticImageData | string;
  className?: string;
  imgClassName?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!imgRef.current || !containerRef.current) return;

    gsap.to(imgRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`img-container w-[20vw] h-[60vh] relative overflow-hidden ${className}`}
    >
      <Image
        ref={imgRef}
        src={src}
        alt="parallax"
        height={1000}
        width={1000}
        className={`object-cover sticky  top-0 left-0 w-full h-[125%] ${imgClassName}`}
      />
    </div>
  );
}
