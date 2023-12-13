import * as THREE from "three";
import {
  Float,
  PerspectiveCamera,
  useScroll,
  Text,
  OrbitControls
} from "@react-three/drei";
import { useMemo, useRef } from "react";

import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useFrame } from "react-three-fiber";

const LINE_NB_POINTS = 12000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02

const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE)
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    if(scroll && typeof scroll.offset === "number") {
    // const curPointIndex = Math.min(
    //   Math.round(scroll.offset * linePoints.length),
    //   linePoints.length - 1
    // );
    const scrollOffset = Math.max(0,scroll.offset);
    
    const curPoint = curve.getPoint(scrollOffset);

    //Follow the curve points 
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    //Make the group look ahead on the curve
    const lookAtPoint = curve.getPoint(Math.min(scrollOffset + CURVE_AHEAD_CAMERA,1));

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    )
    const targetLookAt = new THREE.Vector3()
    .subVectors(curPoint,lookAtPoint)
    .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24)
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );
    // Airplane rotation

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0,1,0),
      -nonLerpLookAt.rotation.y
    )
    let angle = Math.atan(-tangent.z,tangent.x);
        angle = -Math.PI / 2 + angle

    const targetAirPlaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    )

    airplane.current.quaternion.slerp(targetAirPlaneQuaternion, delta * 24)
      }
  });

  const airplane = useRef();

  return (
    <>
      {/* <OrbitControls /> */}
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <group ref={airplane}>
        <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
          <Airplane
            rotation-y={Math.PI / 2}
            scale={[0.2, 0.2, 0.2]}
            position-y={0.1}
          />
        </Float>
        </group>
      </group>
      {/* TEXT */}
      <group position={[-3,0,-100]}>
        <Text
          color="white"
          position={[0, 0, -1]}
          fontSize={0.22}
          anchorX={"left"}
          anchorY="middle"
          maxWidth={2.5}
        >
          Welcome to the world ! {"\n"}
          Have a look at my projects.
        </Text>
      </group>
      <group position={[10,1,-200]}>
        <Text 
        color="white"
          position={[0, 0, -1]}
          fontSize={0.52}
          anchorX={"left"}
          anchorY="center"
          maxWidth={2.5}
          >
          Services
        </Text>
        <Text
        color="white"
        position={[0, 0, -1]}
        position-y={[-0.66]}
        fontSize={0.22}
        anchorX={"left"}
        anchorY="top"
        maxWidth={2.5}
        >
          Do you want to know more ?
        </Text>
      </group>
      {/* LINE */}
      <group position-y={-2}>
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

export default Experience;
