import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.5;
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Floating3DElements() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <FloatingOrb position={[-3, 2, 0]} color="#3b82f6" speed={0.5} />
        <FloatingOrb position={[3, -2, -2]} color="#8b5cf6" speed={0.7} />
        <FloatingOrb position={[0, 3, -4]} color="#ec4899" speed={0.6} />
        <FloatingOrb position={[-4, -1, -3]} color="#10b981" speed={0.8} />
      </Canvas>
    </div>
  );
}
