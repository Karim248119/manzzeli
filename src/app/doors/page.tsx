import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import DoorItems from "@/data/doors";
import Typo from "@/components/Typo";
import Image from "next/image";
import { PiCircleHalfTiltLight } from "react-icons/pi";

export default function page() {
  return (
    <div>
      <Header
        title="Doors"
        img="https://www.duchateau.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Fduchateau%2FZ75Wlp7c43Q3gOy0_AtelierGoldenHour.jpg?auto=format,compress%26rect=0,36,1500,1927%26w=1320%26h=1696&w=767&q=100"
        des="Whether you're looking for the natural beauty of hardwood or the durability for lifestyle of luxury vinyl plank, your foundation is waiting for you in our designer-curated collections."
        subtitle="Availble only in our showroom"
      />
      <Typo
        font="base"
        fixed
        className="w-1/2 mx-auto text-2xl text-center mt-20"
      >
        The perfect door defines an edge, provides intimacy, or opens the room
        to new ideas. Explore DUCHATEAU doors and add definition and tone to
        your space.
      </Typo>
      <div className="w-full columns-2 p-20 space-y-10">
        {DoorItems.map((item) => (
          <div key={item.title} className="w-full flex flex-col gap-2 ">
            <Image
              width={1000}
              height={1000}
              alt=""
              src={item.img}
              className="!w-full !h-auto"
            />
            <div className="h-[1px] bg-black w-full" />
            <div className="w-full flex items-center gap-2">
              <PiCircleHalfTiltLight />
              <Typo fixed font="serif" className="capitalize text-2xl">
                {item.title}
              </Typo>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 mx-auto text-2xl flex flex-col justify-center items-center gap-4 py-20">
        <Typo font="base" fixed className="text-center">
          &quot; Happiness often sneaks in through the door you didn&apos;t know
          you left open. &quot;
        </Typo>
        <Typo font="base" fixed className="text-center">
          - John Barrymore
        </Typo>
      </div>
      <Footer />
    </div>
  );
}
