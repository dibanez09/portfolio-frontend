import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Cube } from '../Cube';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePageScene = (props) => {
  const cameraRef = useRef();
  useFrame(({ pointer, viewport, clock }) => {
    const radius = 24;
    // Use mouse x to influence orbit speed or angle
    const angle = pointer.x * 0.2 * Math.PI; // more movement = faster orbit
    const angle2 = pointer.y * 0.01 * Math.PI + 1.45; // more movement = faster orbit
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const y = radius * Math.cos(angle2);

    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        x,
        y,
        z,
        duration: 0.5,
        ease: 'none'
      });
      // cameraRef.current.position.set(x, y, z);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  return (
    <>
      <OrbitControls enableZoom={false} enableDamping={false} enableRotate={false} />
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 10, 20]}
      />
      <Cube />
      <ambientLight intensity={1} />
    </>
  );
};

export default HomePageScene;
