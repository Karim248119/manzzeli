import Image from "next/image";
import React from "react";
import Typo from "../Typo";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={
          "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg"
        }
        width={1920}
        height={1080}
        alt="hero"
        className="w-full h-full object-cover object-bottom brightness-90"
      />
      <Typo
        font="logo"
        hidden
        className="absolute md:-bottom-10 bottom-2 left-1/2 -translate-x-1/2 text-[18vw] text-white font-bold "
      >
        Manzzeli
      </Typo>
    </div>
  );
}
