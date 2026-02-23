import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { type MotionValue } from 'motion/react';

const Shape = ({ scrollProgress, position, type, color, delay = 0 }: { 
  scrollProgress: MotionValue<number>, 
  position: [number, number, number], 
  type: 'sphere' | 'torus',
  color: string,
  delay?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const progress = scrollProgress.get();
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.rotation.x = progress * Math.PI + time * 0.1;
      meshRef.current.rotation.y = progress * Math.PI * 0.5 + time * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1 - progress * 2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      {type === 'sphere' && (
        <Sphere ref={meshRef} args={[1, 32, 32]} position={position} scale={1.2}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </Sphere>
      )}
      {type === 'torus' && (
        <Torus ref={meshRef} args={[1, 0.2, 12, 48]} position={position} scale={0.8}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
        </Torus>
      )}
    </Float>
  );
};

export const Scene3D = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        
        <Shape scrollProgress={scrollProgress} position={[0, 0, 0]} type="sphere" color="#ffffff" />
        <Shape scrollProgress={scrollProgress} position={[-4, 2, -2]} type="torus" color="#6366f1" delay={1} />
        <Shape scrollProgress={scrollProgress} position={[4, -2, -1]} type="sphere" color="#a855f7" delay={2} />
      </Canvas>
    </div>
  );
};
