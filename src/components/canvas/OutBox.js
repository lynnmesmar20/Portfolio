
import React, { useRef, useState, useEffect } from 'react';
import { Canvas ,useFrame} from "@react-three/fiber";
import { OrbitControls,useGLTF } from "@react-three/drei";


const AnimatedModel = ({isMobile}) => {
    
    const GroupRef = useRef();
    const { scene } = useGLTF('./outBox/scene.gltf');
  
    useFrame((state ,delta) => {
     
      if (GroupRef.current) {
        GroupRef.current.rotation.x += delta
      }
    });
  
    return (
      
        <group ref={GroupRef}>
          <primitive object={scene} scale={isMobile ? 7 : 9} />
        </group>
     
    );
  };

const OutBox = () => {
    
    
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
      <Canvas>
        
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <pointLight position={[0, -10, 0]} />
  
        
          <AnimatedModel isMobile={isMobile}/>
  
        
          
          <OrbitControls 
           enableZoom={false}
           enabled={false}/>
          
        
      </Canvas>
    );
  };
  
  export default OutBox;