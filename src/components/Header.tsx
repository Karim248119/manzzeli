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
    <div className="w-full min-h-screen grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 text-black">
      <div className="w-full h-full flex flex-col justify-center items-center gap-1 md:px-20 px-5">
        <Typo
          font="serif"
          className="md:text-9xl text-4xl md:px-20 px-5 md:mb-5 mb-2"
        >
          {title}
          <PiTidalLogoThin className="md:text-4xl text-2xl mx-auto" />
        </Typo>

        <Typo font="base" className="text-center md:text-base text-xs">
          {des}
        </Typo>
        <Typo className="text-center md:text-lg text-sm font-serif md:mt-16 mt-5 md:w-40">
          {subtitle}
        </Typo>
      </div>
      <ParallexImg src={img} className="md:!h-screen !h-[50vh] w-full" />
    </div>
  );
}
