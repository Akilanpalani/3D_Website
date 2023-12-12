import * as THREE from "three";
import {
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";

import { useMemo, useRef } from "react";

import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useFrame } from "react-three-fiber";

const LINE_NB_POINTS = 2000;
const Experiance = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  });
  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0.02);
    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointsIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointsIndex];
    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });
  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <Float floatIntensity={2} speed={2}>
          <Airplane
            rotation-y={Math.PI / 2}
            scale={[0.5, 0.5, 0.5]}
            position-y={0.1}
          />
        </Float>
      </group>
      {/* LINE */}
      <group position-y={-2}>
        {/* <Line 
          points={linePoints}
          opacity={0.7}
          color={"white"}
          lineWidth={5}
          transparent
        /> */}
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.2} transparent />
        </mesh>
      </group>

      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 100, -30]} />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[-2, 1, -3]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[-2, 1, -3]}
        rotation-y={Math.PI / 9}
      />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[1, 1, -53]} />
      <Cloud opacity={0.3} scale={[0.8, 0.8, 0.5]} position={[0, 1, -100]} />
    </>
  );
};

export default Experiance;
