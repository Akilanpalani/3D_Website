import * as THREE from "three";
import {
  Float,
  PerspectiveCamera,
  useScroll,
  OrbitControls
} from "@react-three/drei";
import { useMemo, useRef } from "react";

import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useFrame } from "react-three-fiber";
import TextSection from "./TextSection";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;

const Experience = () => {

  const curvePoints = useMemo(() =>
    [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE)
    ], []
  );

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      curvePoints,
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const textSections = useMemo(() => {
    return [
      {
        position: new THREE.Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        title: "My Dearest World",
        subtitle: `As I sit here, penning down these words, I can't help but feel the vastness of the miles that separate us. Yet, in this distance, there exists a connection that defies geography, bridging the space between our hearts.`,
      },
      {
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Hello My World",
        subtitle: `Welcome to my world`,
      },
      {
        position: new THREE.Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "Hello My World",
        subtitle: `Welcome to my world`,
      },
    ]
  }, []);
  // const linePoints = useMemo(() => {
  //   return curve.getPoints(LINE_NB_POINTS);
  // }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    if (scroll && typeof scroll.offset === "number") {
      // const curPointIndex = Math.min(
      //   Math.round(scroll.offset * linePoints.length),
      //   linePoints.length - 1
      // );
      const scrollOffset = Math.max(0, scroll.offset);

      const curPoint = curve.getPoint(scrollOffset);

      //Follow the curve points 
      cameraGroup.current.position.lerp(curPoint, delta * 24);

      //Make the group look ahead on the curve
      const lookAtPoint = curve.getPoint(Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1));

      const currentLookAt = cameraGroup.current.getWorldDirection(
        new THREE.Vector3()
      )
      const targetLookAt = new THREE.Vector3()
        .subVectors(curPoint, lookAtPoint)
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
        new THREE.Vector3(0, 1, 0),
        -nonLerpLookAt.rotation.y
      )
      let angle = Math.atan2(-tangent.z, tangent.x);
      angle = -Math.PI / 2 + angle
      let angleDegrees = (angle * 180) / Math.PI;
      angleDegrees *= 2.4; //stronger angle

      //limit plane angle
      if (angleDegrees < 0) {
        angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE)
      }
      if (angleDegrees < 0) {
        angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE)
      }
      //set back angle
      angle = (angleDegrees * Math.PI) / 180;
      const targetAirPlaneQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          airplane.current.rotation.x,
          airplane.current.rotation.y,
          angle
        )
      )

      airplane.current.quaternion.slerp(targetAirPlaneQuaternion, delta * 2)
    }
  });

  const airplane = useRef();

  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
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
      {
        textSections.map((textSection, index) => (
          <TextSection {...textSection} key={index} />
        ))}
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
          <meshStandardMaterial color={"white"} opacity={1} transparent
            envMapIntensity={2}
          />
        </mesh>
      </group>

      <Cloud
        opacity={0.5}
        scale={[0.3, 0.3, 0.3]}
        position={[-2, 200, 303]}
      />
      <Cloud
        opacity={0.5}
        scale={[0.3, 0.3, 0.3]}
        position={[-2, 100, -30]}
      />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[-2, 1, -6]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.5, 0.5, 0.5]}
        position={[2, 0.12, -3]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.5, 0.5, 0.5]}
        position={[-2, -0.12, -3]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.5, 0.5, 0.5]}
        position={[1, 1, -53]}
      />
      <Cloud
        opacity={0.3}
        scale={[0.8, 0.8, 0.5]}
        position={[0, 1, -100]}
      />
    </>
  );
};

export default Experience;
