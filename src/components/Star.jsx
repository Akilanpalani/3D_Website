import * as THREE from "three";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Html, OrbitControls, Stars, Trail } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Button = ({onClick}) => {
  return (
    <group position={[0, 0, 15]}>
      <mesh>
        <Html>
          <button
            className={`w-[200px] h-[50px] rounded-md animate hover:animate-none border-2 border-white bg-opacity-50 hover:bg-opacity-100 backdrop-blur-md`}
            onClick={onClick}
          >
            Click Here To See The Magic
          </button>
        </Html>
      </mesh>
    </group>
  );
};
const ShootingStar = () => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2;
    ref.current.position.y = Math.sin(t);
    ref.current.position.x = Math.cos(t);
    ref.current.position.z = Math.sin(t);
  });
  return (
    <Trail
      width={2}
      length={10}
      color={new THREE.Color(2, 1, 10)}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
};

const Star = () => {
  const history = useNavigate();
  const handleButtonClick = () => {
    history("/message");
  }
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <color attach="background" args={["black"]} />
      <directionalLight position={[-2, 5, 2]} intensity={1.5} />
      <ShootingStar />
      <Button onClick={handleButtonClick}/>
      <Stars depth={1} count={7000} factor={3} fade speed={2} />
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
};

export default Star;
