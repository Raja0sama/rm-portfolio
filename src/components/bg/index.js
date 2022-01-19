import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import theme from "../../theme";

extend({ OrbitControls });

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Sphere = ({ rotateX, rotateY }) => {
  const ref = useRef();
  useFrame(() => {
    if (rotateX)
      if (ref.current.rotation) {
        ref.current.rotation.x = ref.current.rotation.x += rotateX;
      }

    if (rotateY)
      if (ref.current.rotation) {
        ref.current.rotation.y = ref.current.rotation.y += rotateY;
      }
  });

  useEffect(() => {
    window.a = ref.current;
  }, []);
  return (
    <group ref={ref}>
      <points>
        <sphereGeometry args={[4, 60, 60]} />
        <pointsMaterial size={0.009} color={theme.textColor} sizeAttenuation />
      </points>
    </group>
  );
};

export default function SphereComponent() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* <gridHelper /> */}
        <perspectiveCamera
          fov={75}
          aspect={sizes.width / sizes.height}
          position={[0, -5, 4]}
          near={0.1}
          far={50}
        >
          <Sphere rotateX={0.005} rotateY={0.005} />
          {/* <Sphere rotateY={-0.005} /> */}
        </perspectiveCamera>
        {/* <Controls /> */}
      </Canvas>
    </div>
  );
}
