import React from "react";
import ParallexImg from "./ParallexImg";
import Typo from "./Typo";
import { PiTidalLogoThin } from "react-icons/pi";

export default function Header({
  title,
  subtitle,
  des,
  img,
}: {
  title: string;
  subtitle: string;
  des: string;
  img: string;
}) {
  return (
    <div className="w-full h-screen grid grid-cols-2 text-black">
      <div className="w-full h-full flex flex-col justify-center items-center gap-1 px-20">
        <Typo font="serif" className="text-9xl px-20  mb-5">
          {title}
          <PiTidalLogoThin className="text-4xl mx-auto" />
        </Typo>

        <Typo font="base" className="text-center">
          {des}
        </Typo>
        <Typo className="text-center text-lg font-serif mt-16 w-40">
          {subtitle}
        </Typo>
      </div>
      <ParallexImg src={img} className="h-screen w-full" />
    </div>
  );
}
