import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

const Scene = () => {
  return (
    <Canvas style={{ backgroundColor: "black" }}>
      <OrbitControls />
      <Model />
      <directionalLight intensity={3} position={[2, 4, 1]} />
      <Environment preset="forest" />
    </Canvas>
  );
};
export default Scene;
