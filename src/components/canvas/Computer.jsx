import React, { Suspense, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";


const Computer = ({isMobile}) => {

  const model = useGLTF('./computer/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={0.3} color='red' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={model.scene} scale={ isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <Canvas
      frameLoop="never" //for handle canvas refresh
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas