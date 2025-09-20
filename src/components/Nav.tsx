"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";

const NavLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "floors",
    href: "/floors",
  },
  {
    name: "kitchens",
    href: "/kitchens",
  },
  {
    name: "bathrooms",
    href: "/bathrooms",
  },
  {
    name: "doors",
    href: "/doors",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-0.1);
  return (
    <div>
      <div className="fixed z-50 mix-blend-difference w-full h-20 flex items-center justify-between px-20">
        <Link href="/">
          <div className="text-white">
            <Logo />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-4 relative"
        >
          <div
            className={`w-full h-[1.5px] absolute left-0 bg-white duration-500 ${
              isOpen ? "top-1/2 -translate-y-1/2" : "top-0"
            }`}
          />
          <div
            className={`w-full h-[1.5px] absolute left-0 bg-white duration-500 ${
              isOpen ? "bottom-1/2 translate-y-1/2" : "bottom-0"
            }`}
          />
        </button>
      </div>
      {/* navigator */}
      <div
        className="w-full h-screen fixed top-0 left-0  duration-500"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: isOpen ? 1 : 0,
          zIndex: isOpen ? 40 : -1,
        }}
      >
        <div
          className={`w-[50%] ml-[50%] bg-white  overflow-hidden relative  duration-500 ${
            isOpen ? "h-screen" : "h-0"
          }`}
        >
          <div className="absolute top-0 pt-[10vh] right-0 w-full h-screen  grid grid-rows-5">
            {/* sliding background */}
            <div
              className={`w-full h-[18vh] bg-black absolute left-0 duration-300 `}
              style={{
                top: `${hoveredIndex * 18 + 10}vh`,
                opacity: hoveredIndex < 0 ? 0 : 1,
              }}
            />
            {NavLinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="w-full h-full shrink-0 flex items-center px-20 border-b group z-20"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-0.1)}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`uppercase font-semibold shrink-0 text-6xl duration-500 group-hover:text-white z-10`}
                >
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
