import * as THREE from "three";
import {
  Float,
  PerspectiveCamera,
  useScroll,
  OrbitControls
} from "@react-three/drei";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap/gsap-core";

import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useFrame } from "react-three-fiber";
import TextSection from "./TextSection";
<<<<<<< HEAD
import { usePlay } from "../contexts/Play";
import { fadeOnBeforeCompile } from "./utils/fadeMaterial";


=======

>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
<<<<<<< HEAD
const FRICTION_DISTANCE = 42;
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5

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

<<<<<<< HEAD
  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();

=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
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
<<<<<<< HEAD
        cameraRailDist: -1,
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
        position: new THREE.Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
<<<<<<< HEAD
        title: "Hello My Dear",
        subtitle: `As I sit here, penning down these words, I can't help but feel the vastness of the miles that separate us. Yet, in this distance, there exists a connection that defies geography, bridging the space between our hearts.`,
      },
      {
        cameraRailDist: 1.5,
=======
        title: "My Dearest World",
        subtitle: `As I sit here, penning down these words, I can't help but feel the vastness of the miles that separate us. Yet, in this distance, there exists a connection that defies geography, bridging the space between our hearts.`,
      },
      {
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Hello My World",
        subtitle: `Welcome to my world`,
      },
      {
<<<<<<< HEAD
        cameraRailDist: -1,
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
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
<<<<<<< HEAD

  const clouds = useMemo(() => [
    //Starting
    {
      position: new THREE.Vector3(-4.5, -3.2, -7),
    },
    {
      position: new THREE.Vector3(4.5, -4, -10),
    },
    {
      position: new THREE.Vector3(-18, 0.2, -68),
      scale: new THREE.Vector3(1.5, 1.5, 1.5),
      rotation: new THREE.Euler(-Math.PI / 5, Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(1.5, 1.5, 1.5),
      position: new THREE.Vector3(10, -1.2, -52)
    },
    //First Point
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x + 10,
        curvePoints[1].y - 4,
        curvePoints[1].z + 64
      )
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x - 20,
        curvePoints[1].y + 4,
        curvePoints[1].z + 28,
      ),
      rotation: new THREE.Euler(0, Math.PI / 7, 0),
    },
    {
      rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x - 13,
        curvePoints[1].y + 4,
        curvePoints[1].z - 64
      )
    },
    {
      rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x + 54,
        curvePoints[1].y + 2,
        curvePoints[1].z - 82
      )
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[1].x + 8,
        curvePoints[1].y - 14,
        curvePoints[1].z - 22
      )
    },
    //Second Point
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[2].x + 6,
        curvePoints[2].y - 7,
        curvePoints[2].z + 50
      )
    },
    {
      scale: new THREE.Vector3(2, 2, 2),
      position: new THREE.Vector3(
        curvePoints[2].x - 2,
        curvePoints[2].y + 4,
        curvePoints[2].z - 26
      )
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[2].x + 12,
        curvePoints[2].y + 1,
        curvePoints[2].z - 86
      ),
      rotation: new THREE.Euler(0, Math.PI / 4, 0, Math.PI / 3),
    },
    //Third Point
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[3].x + 3,
        curvePoints[3].y - 10,
        curvePoints[3].z + 50
      )
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[3].x - 10,
        curvePoints[3].y,
        curvePoints[3].z + 30
      ),
      rotation: new THREE.Euler(0, Math.PI / 4, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[3].x - 20,
        curvePoints[3].y - 5,
        curvePoints[3].z - 8
      ),
      rotation: new THREE.Euler(0, Math.PI, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(5, 5, 5),
      position: new THREE.Vector3(
        curvePoints[3].x + 3,
        curvePoints[3].y - 5,
        curvePoints[3].z - 98
      ),
      rotation: new THREE.Euler(0, Math.PI / 3, 0),
    },
    //Fourth Point
    {
      scale: new THREE.Vector3(2, 2, 2),
      position: new THREE.Vector3(
        curvePoints[4].x + 3,
        curvePoints[4].y - 10,
        curvePoints[4].z + 2
      )
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[4].x + 24,
        curvePoints[4].y - 6,
        curvePoints[4].z - 42
      ),
      rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[4].x - 4,
        curvePoints[4].y + 9,
        curvePoints[4].z - 62
      ),
      rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
    },
    //Final Point
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[7].x + 12,
        curvePoints[7].y - 5,
        curvePoints[7].z + 60
      ),
      rotation: new THREE.Euler(-Math.PI / 4, -Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(3, 3, 3),
      position: new THREE.Vector3(
        curvePoints[7].x - 12,
        curvePoints[7].y - 5,
        curvePoints[7].z + 120
      ),
      rotation: new THREE.Euler(Math.PI / 4, Math.PI / 6, 0),
    },
    {
      scale: new THREE.Vector3(4, 4, 4),
      position: new THREE.Vector3(
        curvePoints[7].x,
        curvePoints[7].y,
        curvePoints[7].z
      ),
      rotation: new THREE.Euler(0, 0, 0),
    }
  ], [])
=======
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
<<<<<<< HEAD

    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current < 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      )
    }

    lineMaterialRef.current.opacity = sceneOpacity.current;

    if(end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    if (scroll && typeof scroll.offset === "number") {
      // const curPointIndex = Math.min(
      //   Math.round(scroll.offset * linePoints.length),
      //   linePoints.length - 1
      // );

      let friction = 1;
      let resetCamera = true;
      //LOOK TO CLOSE TEXT SECTION
      textSections.forEach((textSection) => {
        const distance = textSection.position.distanceTo(cameraGroup.current.position);
        if (distance < FRICTION_DISTANCE) {
          friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
          const targetCameraRailPosition = new THREE.Vector3(
            (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
            0,
            0,
          );
          cameraRail.current.position.lerp(targetCameraRailPosition, delta);
          resetCamera = false;
        }
      });
      if (resetCamera) {
        const targetCameraRailPosition = new THREE.Vector3(
          0, 0, 0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
      }

      //CALCULATE LERPED SCROLL OFFSET
      let lerpedScrollOffset = THREE.MathUtils.lerp(lastScroll.current, scrollOffset, delta * friction);

      //PROTECT BELOW 0 AND ABOVE 1
      lerpedScrollOffset = Math.min(1, lerpedScrollOffset);
      lerpedScrollOffset = Math.max(0, lerpedScrollOffset);

      lastScroll.current = lerpedScrollOffset;
      tl.current.seek(lerpedScrollOffset * tl.current.duration());

      const curPoint = curve.getPoint(lerpedScrollOffset);

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
=======
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
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
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

<<<<<<< HEAD
      airplane.current.quaternion.slerp(targetAirPlaneQuaternion, delta * 2);

      if(cameraGroup.current.position.z < curvePoints[curvePoints.length -1].z + 100) {
        setEnd(true);
        planeOutTl.current.play();
      }
=======
      airplane.current.quaternion.slerp(targetAirPlaneQuaternion, delta * 2)
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
    }
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#abaadd"
  });

  const planeInTl = useRef();
  const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#ffad30",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#424242",
      colorB: "#ffcc00",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#81318b",
      colorB: "#55ab8f",
    });
    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(airplane.current.position,{
      duration: 1,
      z: -1000,
    })
  }, [])

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  return useMemo(() => (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls /> */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRail}>
          <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        </group>
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
<<<<<<< HEAD
          <meshStandardMaterial
            color={"white"}
            ref={lineMaterialRef}
            transparent
            envMapIntensity={2}
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>
      {/* Clouds */}
      {
        clouds.map((cloud, index) => (
          <Cloud sceneOpacity={sceneOpacity} {...cloud} key={index} />
        ))
      }
=======
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
>>>>>>> 9148f7fd634f365700128a3b0caad42acf8739c5
    </>
  ), []);
};

export default Experience;
