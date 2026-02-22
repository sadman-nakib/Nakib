import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ scrollProgress, position, type, color, delay = 0 }: { 
  scrollProgress: number, 
  position: [number, number, number], 
  type: 'sphere' | 'torus' | 'octahedron',
  color: string,
  delay?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.rotation.x = scrollProgress * Math.PI * 2 + time * 0.2;
      meshRef.current.rotation.y = scrollProgress * Math.PI + time * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.2 - scrollProgress * 3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {type === 'sphere' && (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={1.2}>
          <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.1} metalness={0.8} />
        </Sphere>
      )}
      {type === 'torus' && (
        <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={position} scale={0.8}>
          <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
        </Torus>
      )}
      {type === 'octahedron' && (
        <Octahedron ref={meshRef} args={[1, 0]} position={position} scale={0.7}>
          <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
        </Octahedron>
      )}
    </Float>
  );
};

export const Scene3D = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Shape scrollProgress={scrollProgress} position={[0, 0, 0]} type="sphere" color="#ffffff" />
        <Shape scrollProgress={scrollProgress} position={[-4, 2, -2]} type="torus" color="#6366f1" delay={1} />
        <Shape scrollProgress={scrollProgress} position={[4, -2, -1]} type="octahedron" color="#a855f7" delay={2} />
        <Shape scrollProgress={scrollProgress} position={[-3, -3, -3]} type="octahedron" color="#ec4899" delay={3} />
        <Shape scrollProgress={scrollProgress} position={[5, 3, -4]} type="torus" color="#ffffff" delay={4} />
      </Canvas>
    </div>
  );
};
