import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const Sphere = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current.rotation) {
      ref.current.rotation.x = ref.current.rotation.x += 0.005;
    }
  });

  useEffect(() => {
    window.a = ref.current;
  }, []);
  return (
    <group ref={ref}>
      <points>
        <sphereGeometry args={[3.3, 40, 40]} />
        <pointsMaterial size={0.007} sizeAttenuation />
      </points>
    </group>
  );
};

export default function SphereComponent() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <perspectiveCamera
          fov={75}
          aspect={sizes.width / sizes.height}
          position={[0, 1, 2]}
          near={0.1}
          far={100}
        >
          <Sphere />
        </perspectiveCamera>
        {/* <Controls /> */}
      </Canvas>
    </div>
  );
}
