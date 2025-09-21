"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // base styles
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import Typo from "./Typo";

export default function SplideCarousel({
  slides,
  dir = "ltr",
  showText,
}: {
  slides: string[];
  dir?: "rtl" | "ltr";
  showText?: boolean;
}) {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="w-full min-h-screen py-20">
      {showText && (
        <Typo font="serif" className="text-2xl px-10 mb-20 w-1/2">
          A seamless process from concept to completion, we work with designers
          and architects to support their vision, cultivating the experience and
          results they deserve.
        </Typo>
      )}
      <Splide
        options={{
          direction: dir,
          type: "loop", // infinite loop
          drag: "free", // grab-to-drag enabled
          focus: "center",
          arrows: false,
          pagination: false,
          perPage: isMobile ? 1 : 3,
          gap: "1rem",
          autoScroll: {
            speed: 1, // control scroll speed
            pauseOnHover: true, // stops when hovering
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        {slides.map((src, i) => (
          <SplideSlide
            key={i}
            className="md:w-[30vw] w-[90vw] h-[50vh] relative "
          >
            <Image
              width={1000}
              height={1000}
              src={src}
              alt={`item ${i}`}
              className="w-[30vw] h-[50vh] object-cover cursor-grab absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:w-[26vw] hover:h-[48vh] duration-700"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
