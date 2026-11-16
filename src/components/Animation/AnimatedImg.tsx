"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function AnimatedImg({
  src,
  alt = "...",
  className,
  ...props
}: AnimatedImgProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 95%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      width={1000}
      height={1000}
    />
  );
}
