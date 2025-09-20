"use client";
import FloorSlides from "@/data/floor";
import Image from "next/image";
import React from "react";

export default function ItemSlider() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {FloorSlides.map((item, idx) => (
        <div
          key={idx}
          className={`h-screen w-screen duration-1000 absolute top-0 overflow-hidden 

            `}
          style={{
            transform: `translateX(-${index * 100}vw)`,
            left: `${idx * 100}vw`,
          }}
        >
          <Image
            width={1000}
            height={1000}
            src={item.img}
            alt=""
            className="w-screen h-screen object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-5 left-0 flex justify-center gap-2 w-full z-40">
        {FloorSlides.map((item, idx) => (
          <button key={idx} onClick={() => setIndex(idx)}>
            <Image
              width={500}
              height={500}
              src={item.texture}
              alt=""
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
