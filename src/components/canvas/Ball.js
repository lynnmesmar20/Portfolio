import React, { Suspense, useState ,useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
   
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={props.isMobile ? 1 : 2}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
    const [isMobile,setisMobile] = useState(false);
    useEffect(
        () =>{
            const mediaQuery = window.matchMedia("(Max-width:500px)");
            setisMobile(mediaQuery.matches);
            
            const mediaQueryHandle = (event) =>{
                setisMobile(mediaQuery.matches);
            }
            mediaQuery.addEventListener("change",mediaQueryHandle);

            return ()=>{
               mediaQuery.removeEventListener("change" , mediaQueryHandle);
            }
        }
        
        ,[])

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile}/>
      
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;