"use client";
import { Fonts } from "@/lib/fonts";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Typo({
  children,
  className,
  fixed,
  duration = 1.5,
  hidden = false,
  font,
}: {
  children: React.ReactNode;
  className?: string;
  fixed?: boolean;
  duration?: number;
  hidden?: boolean;
  font?: "main" | "logo" | "serif" | "base";
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0 });

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      onEnter: () => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 1 },
          { y: 0, opacity: 1, duration, ease: "power2.out" }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          el,
          { y: -100, opacity: 1 },
          { y: 0, opacity: 1, duration, ease: "power2.out" }
        );
      },
    });
  }, []);

  return (
    <div className={hidden ? "overflow-hidden" : ""}>
      <div
        ref={fixed ? null : elRef}
        style={{ opacity: fixed ? 1 : 0 }} // Ensures it starts hidden
        className={` ${
          font === "main"
            ? Fonts.main.className
            : font === "logo"
            ? Fonts.logo.className
            : font === "serif"
            ? Fonts.serif.className
            : font === "base"
            ? Fonts.quicksand.className
            : ""
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
