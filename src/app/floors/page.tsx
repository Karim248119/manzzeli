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
      <div className="bg-white relative z-10">
        <Header
          title="Floors"
          img="https://www.duchateau.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Fduchateau%2FZ75Wlp7c43Q3gOy0_AtelierGoldenHour.jpg?auto=format,compress%26rect=0,36,1500,1927%26w=1320%26h=1696&w=767&q=100"
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
        src="https://www.duchateau.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Fduchateau%2FZxoWJ4F3NbkBX9kZ_3bdd160b41a8befc7a2bf21fd1cc272a.jpeg?auto=format%252Ccompress%26rect=0%252C862%252C2461%252C857%26w=2882%26h=1004&w=2559&q=100"
        link="/doors"
        linkText="Discover our Doors"
      />
    </div>
  );
}
