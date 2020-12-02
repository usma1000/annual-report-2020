import React, { useRef, useMemo } from "react";
import { WebGLRenderTarget } from "three";
import { useLoader, useThree, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BackfaceMaterial from "./BackfaceMaterial";
import RefractionMaterial from "./RefractionMaterial";

const Knot = () => {
  const { size, gl, scene, camera } = useThree();
  const ratio = gl.getPixelRatio();
  const [
    envFbo,
    backfaceFbo,
    backfaceMaterial,
    refractionMaterial,
  ] = useMemo(() => {
    const backfaceFbo = new WebGLRenderTarget(
      size.width * ratio,
      size.height * ratio
    );
    const envFbo = new WebGLRenderTarget(
      size.width * ratio,
      size.height * ratio
    );
    const refractionMaterial = new BackfaceMaterial();
    const backfaceMaterial = new RefractionMaterial({
      envMap: envFbo.texture,
      backfaceMap: backfaceFbo.texture,
      resolution: [size.width * ratio, size.height * ratio],
    });
    return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial];
  }, [size, ratio]);

  const { nodes } = useLoader(GLTFLoader, "./knot.glb");
  const model = useRef();
  useFrame(() => {
    model.current.rotation.y += 0.01;

    gl.autoClear = false;
    camera.layers.set(0);
    gl.setRenderTarget(envFbo);
    gl.clearColor();
    gl.render(scene, camera);
    gl.clearDepth();
    camera.layers.set(1);
    model.current.material = backfaceMaterial;
    gl.setRenderTarget(backfaceFbo);
    gl.clearDepth();
    gl.render(scene, camera);
    camera.layers.set(0);
    gl.setRenderTarget(null);
    gl.render(scene, camera);
    gl.clearDepth();
    camera.layers.set(1);
    model.current.material = refractionMaterial;
    gl.render(scene, camera);
  });
  return (
    <group>
      <mesh visible geometry={nodes.mesh_0.geometry} ref={model}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

export default Knot;
