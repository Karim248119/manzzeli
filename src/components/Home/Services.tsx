import React from "react";
import Typo from "../Typo";
import Card from "../Card";

const SERVICES = [
  {
    title: "complimentary samples",
    des: "See the beauty of our collection for yourself, our complimentary samples will give you a better idea of our products",
    img: "https://images.pexels.com/photos/8250893/pexels-photo-8250893.jpeg",
  },
  {
    title: "design directory",
    des: "Get inspired by our design directory, our design directory is a collection of our best designs, from rooms to bathrooms to kitchens",
    img: "https://images.pexels.com/photos/6648412/pexels-photo-6648412.jpeg",
  },
  {
    title: "care & maintenance",
    des: "Products and guidlines for mentaining your floor, walls and our other products",
    img: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg",
  },
];
export default function Services() {
  return (
    <div className="w-full py-10 px-20 bg-primary">
      <Typo font="serif" className="text-9xl pb-10">
        Design Services
      </Typo>
      <div className="w-full grid grid-cols-3 gap-3">
        {SERVICES.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            subtitle={item.des}
            src={item.img}
            imgClassName="!h-[55vh]"
            className="text-xs"
          />
        ))}
      </div>
    </div>
  );
}
