import { TeamItems } from "@/data";
import React from "react";
import Typo from "../Typo";
import Image from "next/image";

export default function Team() {
  return (
    <div className="w-full min-h-screen bg-black p-10 py-20 ">
      <Typo font="serif" className="text-9xl mb-20 text-white text-end">
        Our Team
      </Typo>
      {TeamItems.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-center justify-between h-10 group"
        >
          <div className="w-1/2">
            <Image
              width={300}
              height={300}
              src={item.img}
              className="w-10 aspect-square group-hover:w-40 group-hover:z-20 relative object-cover duration-300 "
              alt=""
            />
          </div>
          <div className="w-1/2 flex justify-between">
            <h1 className="font-bold text-2xl text-neutral-600 group-hover:text-white">
              {item.name}
            </h1>
            <p className="text-white font-semibold opacity-0 group-hover:opacity-100">
              {item.role}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
