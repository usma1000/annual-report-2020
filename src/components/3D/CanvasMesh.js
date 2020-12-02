import React, { Suspense } from "react";
import Knot from "./Knot";
import { Canvas } from "react-three-fiber";

const CanvasMesh = () => (
  <Canvas style={canvasStyle} camera={{ position: [0, 0, 50] }}>
    <directionalLight intensity={0.5} />
    <Suspense fallback={fallbackMesh}>
      <Knot />
    </Suspense>
  </Canvas>
);

const fallbackMesh = () => (
  <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
    <sphereGeometry attach="geometry" args={[10, 16, 16]} />
    <meshStandardMaterial attach="material" transparent opacity={0} />
  </mesh>
);

const canvasStyle = {
  background: "transparent",
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  zIndex: "1000",
};

export default CanvasMesh;
