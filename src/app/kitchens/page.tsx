import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImgLink from "@/components/ImgLink";
import ParallexImg from "@/components/ParallexImg";
import ParallexSlider from "@/components/ParallexSlider";
import Typo from "@/components/Typo";
import KitchenSlides, { KitchenCarousel } from "@/data/kitchen";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-white relative z-10">
        <Header
          title="Kitchens"
          img="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          des="The kitchen is the center of our homes, a place that cultivates creativity and connection. No matter the project, style, or budget, the perfect design is waiting"
          subtitle="Availble only in our showroom"
        />
        <ParallexSlider slides={KitchenSlides} />
        <div className="w-full bg-primary md:py-20 md:px-10 px-5 py-10">
          <div className="w-full grid md:grid-cols-2 gap-3">
            <div>
              <Typo font="serif" className="md:text-7xl text-3xl md:py-10 py-5">
                Outdoor kitchens
              </Typo>
              <ParallexImg
                className="w-full md:!h-[130vh] !h-[30vh]"
                src="https://images.unsplash.com/photo-1504524113458-1a56028c190c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div>
              <ParallexImg
                className="w-full md:!h-[130vh] !h-[30vh]"
                src="https://images.unsplash.com/photo-1644232139100-c0320ff0c2fe?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Typo font="base" className="md:text-base text-xs md:py-10 py-5">
                Outdoor kitchens cultivate connection to family, friends, and
                yourself. Our designs instill a sense of belonging and offer an
                aura of peace. From watching a crackling fire to relaxing in a
                chaise lounge, we will create a space you will never want to
                leave.
              </Typo>
            </div>
          </div>
        </div>
        <Carousel slides={KitchenCarousel} />
        <Footer />
      </div>
      <ImgLink
        src="https://plus.unsplash.com/premium_photo-1721274105657-0751a5f42eb8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        link="/bathrooms"
        linkText="Discover our bathrooms"
      />
    </div>
  );
}
