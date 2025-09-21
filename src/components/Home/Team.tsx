import { TeamItems } from "@/data";
import React from "react";
import Typo from "../Typo";
import Image from "next/image";

export default function Team() {
  return (
    <div className="w-full min-h-screen bg-black md:px-10 px-5 py-20 ">
      <Typo
        font="serif"
        className="md:text-9xl text-4xl md:mb-20 mb-10 text-white text-end"
      >
        Our Team
      </Typo>
      {TeamItems.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-center justify-between gap-5 h-10 group"
        >
          <div className="md:w-1/2">
            <Image
              width={300}
              height={300}
              src={item.img}
              className="w-10 aspect-square group-hover:w-40 group-hover:z-20 relative object-cover duration-300 "
              alt=""
            />
          </div>
          <div className="flex-1 flex justify-between">
            <h1 className="font-bold md:text-2xl text-sm text-neutral-600 group-hover:text-white">
              {item.name}
            </h1>
            <p className="text-white md:text-base text-[8px] md:font-semibold md:opacity-0 group-hover:opacity-100">
              {item.role}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
