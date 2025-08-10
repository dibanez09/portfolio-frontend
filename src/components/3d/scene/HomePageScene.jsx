import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Cube } from '../Cube';
import gsap from 'gsap';

const HomePageScene = (props) => {
  const scrollY = useRef(0);
  const radius = 10;
  const isScrolling = useRef(false);

  let timeout;
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      isScrolling.current = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isScrolling.current = false;
      }, 2000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cameraRef = useRef();
  useFrame(({ pointer, viewport, clock, camera }) => {
    if (cameraRef.current && scrollY.current == 0) {
      const radius = 20;
      // Use mouse x to influence orbit speed or angle
      const angle = pointer.x * 0.2 * Math.PI; // more movement = faster orbit
      const angle2 = pointer.y * 0.01 * Math.PI + 1.45; // more movement = faster orbit
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = radius * Math.cos(angle2);

      gsap.to(cameraRef.current.position, {
        x,
        y,
        z,
        duration: 0.5,
        ease: 'none'
      });
    }

    if (cameraRef.current && scrollY.current) {
      // cameraRef.current.position.set(x, y, z);

      const scrollAngle = scrollY.current * 0.0009 + pointer.x * 0.2; // adjust sensitivity here
      const scrollAngle2 = scrollY.current * 0.001 + -pointer.y * 0.4 + 4; // adjust sensitivity here
      const x2 = radius * Math.cos(scrollAngle);
      const z2 = radius * Math.sin(scrollAngle);
      const y2 = scrollAngle2;
      // camera.position.set(x, 5, z);

      gsap.to(camera.position, {
        x: x2,
        y: y2,
        z: z2,
        duration: 0.5,
        ease: 'none',
        scrollTrigger: {
          scrub: false // Remove scrubbing
        }
      });
    }
    cameraRef.current.lookAt(0, 0, 0);
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
