import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ThreeLoader() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 2;
    meshRef.current.rotation.y += delta * 2;
  });

  return (
    <div className="flex flex-col items-center">
      <canvas className="w-16 h-16"></canvas>
      <span className="text-white text-xs mt-2">Loading 3D...</span>
    </div>
  );
}
