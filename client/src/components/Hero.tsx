import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });
  
  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.15}
        color="#60a5fa"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
          
          <Particles />
          <FloatingCube position={[-5, 2, -5]} />
          <FloatingCube position={[5, -2, -8]} />
          <FloatingCube position={[3, 3, -6]} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Taha Moazzam Mern
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-300 glow-text">
            Software Developer | AI Enthusiast | Startup Founder
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Building innovative AI-driven solutions and leading the future of technology at F&A Global and Interaction Private Limited
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex gap-6 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-110 transition-transform duration-300 glow-button"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-300 font-semibold hover:bg-blue-400/10 hover:scale-110 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
