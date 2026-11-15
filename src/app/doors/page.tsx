import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DoorItems from "@/data/doors";
import Typo from "@/components/Typo";
import Image from "next/image";
import { PiCircleHalfTiltLight } from "react-icons/pi";
import ImgLink from "@/components/ImgLink";
import { BsQuote } from "react-icons/bs";
import motion from "framer-motion";
import AnimatedImg from "@/components/AnimatedImg";

export default function page() {
  return (
    <div>
      <div className="bg-white relative z-10">
        <Header
          img="https://images.pexels.com/photos/7533836/pexels-photo-7533836.jpeg"
          title="Doors"
          des="Whether you're looking for the natural beauty of hardwood or the durability for lifestyle of luxury vinyl plank, your foundation is waiting for you in our designer-curated collections."
          subtitle="Availble only in our showroom"
        />
        <Typo
          font="base"
          fixed
          className="md:w-1/2 mx-auto md:text-2xl text-center md:mt-20 mt-10 px-5"
        >
          The perfect door defines an edge, provides intimacy, or opens the room
          to new ideas. Explore DUCHATEAU doors and add definition and tone to
          your space.
        </Typo>
        <div className="w-full md:columns-2 md:p-20 p-5 space-y-10">
          {DoorItems.map((item) => (
            <div key={item.title} className="w-full overflow-auto">
              <AnimatedImg
                width={1000}
                height={1000}
                alt=""
                src={item.img}
                className="!w-full !h-auto"
              />
              <div className="h-[1px] bg-black w-full mt-2" />
              <div className="w-full flex items-center gap-2 p-2">
                <PiCircleHalfTiltLight />
                <Typo fixed font="serif" className="capitalize md:text-2xl">
                  {item.title}
                </Typo>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 mx-auto md:text-2xl flex flex-col justify-center items-center gap-4 px-5 py-20">
          <div className="flex  justify-center items-center gap-4">
            <BsQuote className="text-7xl text-black/60" />
            <Typo font="base" fixed className="text-center">
              Happiness often sneaks in through the door you didn&apos;t know
              you left open.
            </Typo>
            <BsQuote className="text-7xl text-black/60 rotate-180" />
          </div>
          <Typo fixed className="text-center text-sm italic">
            - John Barrymore
          </Typo>
        </div>
        <Footer />
      </div>
      <ImgLink src="/imgs/hero.avif" link="/" linkText="Back to Home" />
    </div>
  );
}
