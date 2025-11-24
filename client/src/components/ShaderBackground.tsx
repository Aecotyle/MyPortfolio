import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.time.value = clock.getElapsedTime();
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[50, 50, 32, 32]} />
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
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <AnimatedShader />
      </Canvas>
    </div>
  );
}
