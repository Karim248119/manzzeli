import { Quicksand } from "next/font/google";

import localFont from "next/font/local";
const main = localFont({ src: "./Aeonik.otf" });
const logo = localFont({ src: "./VitreousBlack-n3zJ.ttf" });
const serif = localFont({ src: "./Mollie-Glaston.ttf" });

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export const Fonts = {
  quicksand,
  main,
  logo,
  serif,
};
