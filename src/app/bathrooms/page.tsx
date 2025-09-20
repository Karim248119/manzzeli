import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImgLink from "@/components/ImgLink";
import ParallexSlider from "@/components/ParallexSlider";
import RoomModel from "@/components/RoomModel";
import BathSlides, { BathCarousel } from "@/data/bath";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-white relative z-10">
        <Header
          title="Baths"
          img="https://images.pexels.com/photos/10919427/pexels-photo-10919427.jpeg"
          des="Our bathrooms are designed to be functional and practical, with a focus on beauty and comfort, our bathrooms are designed to be functional and practical, with a focus on beauty and comfort"
          subtitle="Availble only in our showroom"
        />
        <ParallexSlider slides={BathSlides} />
        <Carousel slides={BathCarousel} showText />
        <RoomModel file="/3d/bath.exr" />
        <Footer />
      </div>
      <ImgLink
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
        link="/rooms"
        linkText="Discover our rooms"
      />
    </div>
  );
}
