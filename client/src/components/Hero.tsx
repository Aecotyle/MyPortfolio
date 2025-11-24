import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" id="home">
      <AuroraBackground>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-6xl">
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
      </AuroraBackground>
    </div>
  );
}
