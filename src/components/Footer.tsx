import React from "react";
import Typo from "./Typo";
import { Button } from "./Button";

const FooterContent = [
  {
    title: "MENU",
    content: ["Home Page", "About", "Collection", "Catalogue"],
  },
  {
    title: "SOCIAL MEDIA",
    content: ["Facebook", "Instagram", "Linkedin", "Pinterest"],
  },
  {
    title: "CONTACT US",
    content: ["Showroom", "AIRBNB Section", "Contact", "via Email"],
  },
  {
    title: "LOCATION",
    content: ["Λεωφ. Κηφισού 81, Αγ. Ιωάννης Ρέντης, 182 33", "T: 2104830284"],
  },
];

export default function Footer() {
  return (
    <div className="w-full h-screen bg-primary grid md:grid-rows-2 grid-rows-3">
      <div className="w-full h-full flex flex-col justify-between md:px-20 px-5 py-14 row-span-2">
        <div className="w-full grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-y-5">
          {FooterContent.map((item) => (
            <div key={item.title} className="w-full h-full flex flex-col">
              <Typo
                fixed
                className=" mx-auto font-bold md:text-base text-sm mb-1"
              >
                {item.title}
              </Typo>
              <div>
                {item.content.map((item, index) => (
                  <Typo
                    fixed
                    font="base"
                    className="md:text-sm text-xs"
                    key={index}
                  >
                    {item}
                  </Typo>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button dark>Subscribe and keep informed</Button>
      </div>

      <div className="w-full h-full flex items-center justify-center overflow-hidden border-t ">
        <Typo font="logo" fixed className="text-[18vw] mx-auto">
          MANZELLI
        </Typo>
      </div>
    </div>
  );
}
