import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative">
      <div
        className="w-full  bg-black  flex  items-center justify-center gap-0"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="md:w-10 md:h-72 w-5 h-36 bg-white animate-[fadePulse_1.3s_ease-in-out_infinite] "
            style={{
              transform: "rotateX(-20deg) rotateY(-15deg)",
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
      <p className="text-white md:text-2xl uppercase font-bold absolute top-[55vh] left-1/2 -translate-x-1/2">
        Loading
      </p>
    </div>
  );
}
