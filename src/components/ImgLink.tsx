import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typo from "./Typo";
import { PiTidalLogoFill, PiTidalLogoThin } from "react-icons/pi";

export default function ImgLink({
  src,
  link,
  linkText,
}: {
  src: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="h-screen w-full relative">
      <div className="h-screen w-full fixed bottom-0 left-0">
        <Image
          src={src}
          alt="hero"
          fill
          className="w-full h-full object-cover object-bottom brightness-50"
        />
        <Link
          href={link}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
        >
          <Typo
            font="serif"
            className="md:text-3xl text-xl md:px-20 px-5 text-center mb-5 text-white"
          >
            {linkText}
            <div className="mx-auto bg-amber-300 relative">
              <PiTidalLogoThin className="absolute left-1/2 -translate-x-1/2 top-0 opacity-100 group-hover:opacity-0 duration-500" />
              <PiTidalLogoFill className="absolute left-1/2 -translate-x-1/2 top-0 opacity-0 group-hover:opacity-100 duration-500" />
            </div>
          </Typo>
        </Link>
      </div>
    </div>
  );
}
