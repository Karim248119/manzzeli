import Image from "next/image";
import React from "react";
import Typo from "../Typo";
import Logo from "../AnimatedLogo";
import MultiPathAnimatedIcon from "../AnimatedIcon";
import { logo } from "@/lib/paths";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <Image
        src="https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg"
        width={1920}
        height={1080}
        alt="hero"
        className="w-full h-full object-cover object-bottom brightness-90"
      />
      <MultiPathAnimatedIcon
        size={1400}
        paths={logo}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-delayed-fade opacity-0"
      />
    </div>
  );
}
