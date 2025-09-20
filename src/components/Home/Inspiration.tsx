import React from "react";
import Typo from "../Typo";
import { Button } from "../Button";
import Card from "../Card";

const InspirationContent = [
  {
    src: "https://cdn.prod.website-files.com/67a90665e9aa195320bb3149/67c9c4c3b19a82c7010918fc_Woonkamer%20Zwolle-min.webp",
    title: "Woonkamer Zwolle",
    subtitle: "Eindhoven",
    className: "",
  },
  {
    src: "https://cdn.prod.website-files.com/67a90665e9aa195320bb3149/67fcd10a0e6e82ea818e672a_Extra-compressed_WEBPIFIER.webp",
    title: "Kleuradvies Hellendoorn",
    subtitle: "Amsterdam",
    className: "mt-[40vh] ",
  },
  {
    src: "https://cdn.prod.website-files.com/67a90665e9aa195320bb3149/67b86e0537517fb7fbe31cc8_export_badkamer.webp",
    title: "Badkamer Hengelo",
    subtitle: "De Bilt",
    className: "mt-[80vh] ",
  },
];

export default function Inspiration() {
  return (
    <div className="w-full  py-20 px-20">
      <Typo className="text-center mx-auto leading-15 text-5xl" font="serif">
        Our design is philosophy blends classic elements with modern touches,
        offering timeless appeal while embracing contemporary trends. This is
        RIGAS concept.
      </Typo>
      <Button dark className="mx-auto mt-10">
        Get inspired
      </Button>
      <div className="w-full grid grid-cols-3 gap-10 py-20">
        {InspirationContent.map((card, idx) => (
          <Card
            key={idx}
            src={card.src}
            title={card.title}
            subtitle={card.subtitle}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
