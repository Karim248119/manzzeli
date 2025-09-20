"use client";
import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuRotate3D } from "react-icons/lu";
import { PiMouseScroll } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

function CameraScrollRotation() {
  const { camera, size } = useThree();

  useEffect(() => {
    camera.updateProjectionMatrix();
    gsap.to(camera.rotation, {
      y: Math.PI * 2, // rotate full 360°
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-area",
        start: "top top",
        end: "bottom bottom",
        scrub: true, // smooth sync with scroll
      },
    });
  }, [camera, size]);

  return null;
}

export default function RoomModel({ file }: { file: string }) {
  const [enableOrbitControls, setEnableOrbitControls] = React.useState(false);
  return (
    <div
      className="w-full scroll-area duration-500 relative"
      style={{
        height: enableOrbitControls ? "300vh" : "300vh",
        cursor: enableOrbitControls ? "move" : "auto",
      }}
    >
      <button
        className="absolute bottom-0 right-0 text-4xl bg-black text-white p-2 z-10"
        onClick={() => setEnableOrbitControls(!enableOrbitControls)}
      >
        {enableOrbitControls ? <PiMouseScroll /> : <LuRotate3D />}
      </button>
      <div className="w-full h-screen sticky top-0 left-0">
        <Canvas>
          <Environment background files={file} />
          {enableOrbitControls ? <OrbitControls /> : <CameraScrollRotation />}
        </Canvas>
      </div>
    </div>
  );
}
