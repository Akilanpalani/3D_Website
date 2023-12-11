import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React from 'react'

import Background from "./Background";
import { Airplane } from "./Airplane";

const Experiance = () => {
  return (
    <>
    <Canvas>
    <OrbitControls />
    <Background />
    <Airplane />
    </Canvas>
    </>
  )
}

export default Experiance