import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Decal, useTexture, Preload, Float } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Ball = ({ icon }) => {
  const texture = useTexture(icon)

  return (
      <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.25} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} //for rotate the icon 180deg
          scale={1}
          map={texture}
          flatShading
        />
      </mesh>
  )
}

const BallCanvas = ({ icon }) => {

  return (
    <div>
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <Ball icon={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default BallCanvas
