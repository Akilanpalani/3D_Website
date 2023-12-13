import { Canvas } from "react-three-fiber";
import Experience from "../Experience";

import React from "react";
import { ScrollControls } from "@react-three/drei";

const Main = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default Main;
