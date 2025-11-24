import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Floating3DElements from "./Floating3DElements";

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "Advanced AI-powered application using Hugging Face APIs to analyze resumes and provide intelligent feedback",
    category: "AI/ML",
    tags: ["Python", "Hugging Face", "AI", "NLP"],
    gradient: "from-blue-600 to-cyan-600",
    size: "large",
  },
  {
    title: "3D Interactive Website",
    description: "Developed for Interaction Private Limited using Luma AI & React Three Fiber with stunning 3D visuals",
    category: "Full Stack",
    tags: ["React", "Three.js", "Luma AI", "3D"],
    gradient: "from-purple-600 to-pink-600",
    size: "large",
  },
  {
    title: "Facial Symptom Detection",
    description: "AI-powered application for medical diagnostics using computer vision and machine learning",
    category: "AI/ML",
    tags: ["MediaPipe", "CNN", "Python", "AI"],
    gradient: "from-orange-600 to-red-600",
    size: "medium",
  },
  {
    title: "POS System",
    description: "C++ application linked with MS SQL database for comprehensive cargo management",
    category: "Desktop App",
    tags: ["C++", "MS SQL", "Desktop"],
    gradient: "from-green-600 to-emerald-600",
    size: "medium",
  },
  {
    title: "Assembly Language Games",
    description: "Rock Paper Scissors, Number Guessing, and Snake Game with DSA integration",
    category: "Low Level",
    tags: ["Assembly", "DSA", "Games"],
    gradient: "from-yellow-600 to-orange-600",
    size: "medium",
  },
  {
    title: "Customer Delivery App",
    description: "Porter-like delivery service application with real-time tracking and full-stack implementation",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-indigo-600 to-purple-600",
    size: "medium",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <Floating3DElements />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">
            Building innovative solutions across AI, full-stack development, and beyond
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-transparent transition-all duration-500 ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-6 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group/btn">
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg transition-colors">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
