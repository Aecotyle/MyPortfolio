import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Python", category: "Languages", color: "#3776ab" },
  { name: "JavaScript", category: "Languages", color: "#f7df1e" },
  { name: "React", category: "Frontend", color: "#61dafb" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "AI/ML", category: "AI", color: "#ff6f61" },
  { name: "Three.js", category: "3D", color: "#000000" },
  { name: "GSAP", category: "Animation", color: "#88ce02" },
  { name: "PostgreSQL", category: "Database", color: "#4169e1" },
  { name: "Docker", category: "DevOps", color: "#2496ed" },
  { name: "AWS", category: "Cloud", color: "#ff9900" },
];

function SkillCube({ position, skill, index }: { position: [number, number, number]; skill: typeof skills[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 + index;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 + index;
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });
  
  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.6 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      )}
    </group>
  );
}

function Skills3DScene() {
  const positions: [number, number, number][] = [
    [-4, 2, 0],
    [-2, 2, -2],
    [0, 2, 0],
    [2, 2, -2],
    [4, 2, 0],
    [-4, -2, -2],
    [-2, -2, 0],
    [0, -2, -2],
    [2, -2, 0],
    [4, -2, -2],
  ];
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
      
      {skills.map((skill, index) => (
        <SkillCube
          key={skill.name}
          position={positions[index]}
          skill={skill}
          index={index}
        />
      ))}
    </>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const categories = [
    { name: "Programming Languages", skills: ["C", "C++", "Python", "JavaScript", "Node.js", "React.js", "SQL"] },
    { name: "AI & Machine Learning", skills: ["MediaPipe", "CNN", "Hugging Face", "IBM Watson AI"] },
    { name: "Backend Technologies", skills: ["Node.js", "Express.js", "Flask", "MS SQL", "PostgreSQL", "MongoDB"] },
    { name: "Frontend & Design", skills: ["React", "React Three Fiber", "Tailwind CSS", "HTML", "CSS", "UI/UX Design"] },
    { name: "DevOps & Tools", skills: ["GitHub", "Docker", "Jenkins", "Vite", "Linux", "cPanel", "DigitalOcean", "Nginx", "Azure", "AWS"] },
    { name: "3D & Visualization", skills: ["Luma AI", "Three.js", "GSAP"] },
  ];
  
  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive tech stack across multiple domains
          </p>
        </motion.div>
        
        <div className="h-[500px] mb-16 rounded-2xl overflow-hidden">
          <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
            <color attach="background" args={["#0a0a0f"]} />
            <Skills3DScene />
          </Canvas>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
