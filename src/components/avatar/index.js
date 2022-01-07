import * as THREE from "three";

import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { OrbitControls } from "@react-three/drei";

export default function M() {
  const [visible, setvisible] = useState(false);
  const [position, setposition] = useState([0, 0, 0]);
  useEffect(() => {
    setInterval((e) => setvisible(true), 1000);
    setInterval(() => {
      setposition([0, -1, 0]);
    }, 1001);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ReinhardToneMapping;
          gl.toneMappingExposure = 2;
        }}
        dpr={window.devicePixelRatio}
        camera={{ position: [0, 1, 3], fov: 38, near: 1, far: -50000 }}
      >
        {/* <OrbitControls position={[0, -1, 0]} /> */}
        <directionalLight
          castShadow
          position={[50, 20, 80]}
          intensity={0.5}
          shadow-mapSize-shadowMapWidth={2048}
          shadow-mapSize-shadowMapHeight={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={-50}
          shadow-camera-bottom={10}
        />
        {/* <axesHelper /> */}
        <pointLight position={[10, -10, -20]} intensity={0.3} />
        <pointLight position={[0, 10, 5]} intensity={0.3} />
        <hemisphereLight
          intensity={0.4}
          groundColor={0x080820}
          color={0xffeeb1}
        />
        {/* <ambientLight /> */}
        <spotLight
          color={0xffa95c}
          intensity={1}
          castShadow={true}
          shadowBias={-0.0001}
          shadow={{
            mapSize: {
              width: 1024 * 4,
              height: 1024 * 4,
            },
          }}
        />
        {visible && (
          <Suspense
            fallback={() => {
              console.log("loading");
              return <div>loading</div>;
            }}
          >
            <Model position={position} />
          </Suspense>
        )}
      </Canvas>
    </div>
  );
}
