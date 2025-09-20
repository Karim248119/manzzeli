"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import Inspiration from "@/components/Home/Inspiration";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import VerticalSlider from "@/components/VerticalSlider";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <VerticalSlider />
      <Inspiration />
      <Services />
      <Team />
      <Footer />
    </main>
  );
}
