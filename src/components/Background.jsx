import * as THREE from "three";
import React from "react";

import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
//357ca1
//white
const Background = () => {
  const colorA = "#0923be";
  const colorB = "#ffad30";
  const start = 0.02;
  const end = -0.5;
  return (
    <>
    <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
        color={"#ffffff"}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
    <Environment resolution={256} >
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2} rotation-x={Math.PI}>
        <LayerMaterial
        color={"#ffffff"}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
    </Environment>
    </>
  );
};

export default Background;
