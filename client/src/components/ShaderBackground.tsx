import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-is-mobile";

function AnimatedShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      vec3 color1 = vec3(0.1, 0.2, 0.5);
      vec3 color2 = vec3(0.5, 0.1, 0.5);
      vec3 color3 = vec3(0.1, 0.4, 0.8);
      
      float pattern = sin(uv.x * 10.0 + time) * cos(uv.y * 10.0 + time * 0.5);
      vec3 finalColor = mix(color1, color2, pattern);
      finalColor = mix(finalColor, color3, sin(time * 0.5) * 0.5 + 0.5);
      
      gl_FragColor = vec4(finalColor, 0.3);
    }
  `;
  
  // throttle shader updates to ~30fps to reduce GPU/JS work on lower-end devices
  useFrame((state, delta) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      const clock = state.clock;
      // only update when enough time has passed (~1/30s)
      if (delta >= (1 / 30) || delta === 0) {
        material.uniforms.time.value = clock.getElapsedTime();
      }
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
  {/* lower segments to reduce fragment work on large screens */}
  <planeGeometry args={[50, 50, 8, 8]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handler = () => setPrefersReducedMotion(mql.matches);
      handler();
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    } catch (e) {
      // matchMedia may not be available in some environments
      setPrefersReducedMotion(false);
    }
  }, []);

  // On mobile or when user prefers reduced motion, render a lightweight static background
  if (isMobile || prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      {/* Use lower DPR and disable antialias for better mobile performance if needed */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <color attach="background" args={["#000000"]} />
        <AnimatedShader />
      </Canvas>
    </div>
  );
}
