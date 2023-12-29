import { Canvas } from "react-three-fiber";
import Experience from "../Experience";

import React from "react";
import { ScrollControls } from "@react-three/drei";
import {Overlay} from "../Overlay";
import { usePlay } from "../../contexts/Play";

const Main = () => {
  const { play,end } = usePlay();
  return (
    <>
      <Canvas
        // camera={{
        //   position: [0, 0, 5],
        //   fov: 30,
        // }}
      >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls 
        pages={play && !end ? 20 : 0}
        damping={1}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
      </Canvas>
      <Overlay />
    </>
  );
};

export default Main;
