import * as THREE from "three";
import React, { useRef } from "react";

import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
import { useFrame } from "react-three-fiber";
//357ca1
//white
const Background = ({backgroundColors}) => {
  const start = 0.02;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  useFrame(() => {
    gradientRef.current.colorA = new THREE.Color(backgroundColors.current.colorA);
    gradientRef.current.colorB = new THREE.Color(backgroundColors.current.colorB);
    gradientEnvRef.current.colorA = new THREE.Color(backgroundColors.current.colorA);
    gradientEnvRef.current.colorB = new THREE.Color(backgroundColors.current.colorB);
  })

  return (
    <>
    <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
        color={"#ffffff"}
          side={THREE.BackSide}
        >
          <Gradient
          ref={gradientRef}
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
          ref={gradientEnvRef}
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
