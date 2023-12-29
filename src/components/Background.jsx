import * as THREE from "three";
import React, { useRef } from "react";

import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
<<<<<<< HEAD
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

=======
//357ca1
//white
const Background = () => {
  const colorA = "#0923be";
  const colorB = "#ffad30";
  const start = 0.02;
  const end = -0.5;
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
  return (
    <>
    <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
        color={"#ffffff"}
          side={THREE.BackSide}
        >
          <Gradient
<<<<<<< HEAD
          ref={gradientRef}
=======
            colorA={colorA}
            colorB={colorB}
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
<<<<<<< HEAD
    <Environment resolution={256} frames={Infinity}>
=======
    <Environment resolution={256} >
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2} rotation-x={Math.PI}>
        <LayerMaterial
        color={"#ffffff"}
          side={THREE.BackSide}
        >
          <Gradient
<<<<<<< HEAD
          ref={gradientEnvRef}
=======
            colorA={colorA}
            colorB={colorB}
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
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
