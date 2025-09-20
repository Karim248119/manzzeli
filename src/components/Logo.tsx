import { Fonts } from "@/lib/fonts";
import React from "react";
import Typo from "./Typo";

export default function Logo() {
  return (
    <Typo fixed font="logo" className={`md:text-4xl text-2xl `}>
      M
    </Typo>
  );
}
