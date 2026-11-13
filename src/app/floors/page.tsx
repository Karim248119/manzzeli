import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImgLink from "@/components/ImgLink";
import Pallete from "@/components/Palette";
import RoomModel from "@/components/RoomModel";
import Carousel from "@/components/Carousel";
import React from "react";
import { FloorCarousel, WallCarousel } from "@/data/floor";

export default function page() {
  return (
    <div>
      <div className="bg-white text-black relative z-10">
        <Header
          title="Floors"
          img="https://images.pexels.com/photos/5353892/pexels-photo-5353892.jpeg"
          des="Whether you're looking for the natural beauty of hardwood or the durability for lifestyle of luxury vinyl plank, your foundation is waiting for you in our designer-curated collections."
          subtitle="Availble only in our showroom"
        />
        <Pallete />
        <Carousel slides={FloorCarousel} showText />

        <Carousel slides={WallCarousel} dir="rtl" />

        <RoomModel file="/3d/floor.exr" />
        <Footer />
      </div>
      <ImgLink
        src="https://images.pexels.com/photos/7533836/pexels-photo-7533836.jpeg"
        link="/doors"
        linkText="Discover our Doors"
      />
    </div>
  );
}
