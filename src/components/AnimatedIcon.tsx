"use client";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface MultiPathAnimatedIconProps {
  paths: string[]; // Changed from d: string
  color?: string;
  size?: number;
  className?: string;
  duration?: number;
}

export default function MultiPathAnimatedIcon({
  paths,
  color = "#fff",
  size = 200,
  className = "",
  duration = 3,
}: MultiPathAnimatedIconProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: color,
      transition: {
        pathLength: { duration, ease: [0.42, 0, 0.58, 1] },
        fill: { delay: duration * 0.4, duration: duration * 0.2 },
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 530 100"
      width={size}
      height={size / 5}
      className={className}
    >
      {paths.map((pathData, index) => (
        <motion.path
          key={index}
          d={pathData}
          stroke={color}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate={controls}
        />
      ))}
    </motion.svg>
  );
}
