import React from "react";
import Typo from "./Typo";
import { PiCircleHalfTiltLight } from "react-icons/pi";
import Image from "next/image";

interface SlideProps {
  img: string;
  title: string;
  subtitles: string[];
  des: string;
  bg?: string;
  text?: string;
}
const Silde = ({ img, title, subtitles, des, bg, text }: SlideProps) => {
  return (
    <div
      className="sticky top-0 left-0  w-full h-screen grid grid-cols-4 items-center justify-between gap-10 py-10 pr-20"
      style={{ background: bg, color: text }}
    >
      <div className="col-span-2 w-full h-full ">
        <Typo fixed className="text-8xl uppercase font-semibold ml-2">
          {title}
        </Typo>
        <Image
          width={1000}
          height={1000}
          alt=""
          src={img}
          className=" w-full !h-[50vh] object-cover"
        />
      </div>
      <div>
        <Typo fixed font="base">
          {des}
        </Typo>
      </div>
      <div className="space-y-4 w-2/3 justify-self-end">
        <div className="w-full h-[1px] bg-current" />
        {subtitles.map((subtitle) => (
          <Typo fixed font="serif" key={subtitle} className="flex">
            <PiCircleHalfTiltLight className="shrink-0 mx-1 mt-1" /> {subtitle}
          </Typo>
        ))}
      </div>
    </div>
  );
};

export default function ParallexSlider({ slides }: { slides: SlideProps[] }) {
  return (
    <div className="w-full h-[300vh]">
      {slides.map((slide, idx) => (
        <Silde key={idx} {...slide} />
      ))}
    </div>
  );
}
