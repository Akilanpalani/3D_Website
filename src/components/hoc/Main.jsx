import { Canvas } from "react-three-fiber";
import Experiance from "../Experiance";

import React from 'react'
import { ScrollControls } from "@react-three/drei";

const Main = () => {
  return (
    <>
    <Canvas>
      <ScrollControls pages={5} damping={0.3}/>
      <Experiance />
    </Canvas>
    </>
  )
}

export default Main