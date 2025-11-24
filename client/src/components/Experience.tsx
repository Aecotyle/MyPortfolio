import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Rocket, Code, Brain } from "lucide-react";
import Floating3DElements from "./Floating3DElements";

const experiences = [
  {
    icon: <Building2 className="w-8 h-8" />,
    company: "F&A Global",
    role: "MTO, AI Team",
    period: "Current",
    description: [
      "Contributing to cutting-edge AI projects and developing innovative solutions",
      "Focused on practical applications of AI and machine learning in real-world problems",
      "Leading AI-driven initiatives and implementing advanced algorithms",
      "Collaborating with cross-functional teams to deliver impactful solutions"
    ],
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-900/20 to-cyan-900/20"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    company: "Interaction Private Limited",
    role: "Founder & Developer",
    period: "2023 - Present",
    description: [
      "Founded and leading a software company focused on AI and full-stack solutions",
      "Spearheading software development and product design initiatives",
      "Building innovative AI-powered applications and full-stack solutions",
      "Managing end-to-end development lifecycle and client relationships"
    ],
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-900/20 to-pink-900/20"
  }
];

const achievements = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Full-Stack Expertise",
    description: "Mastered modern development stack from React to Node.js to AI/ML",
    color: "text-blue-400"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Innovation",
    description: "Developed multiple AI-powered applications using cutting-edge technologies",
    color: "text-purple-400"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Leadership",
    description: "Successfully founded and growing Interaction Private Limited",
    color: "text-pink-400"
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
      <Floating3DElements />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300">
            Building the future through innovation and leadership
          </p>
        </motion.div>
        
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-transparent transition-all duration-500 group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.color}`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-xl text-blue-400 mb-2">{exp.role}</p>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2`}></div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className={`${achievement.color} mb-4`}>
                {achievement.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
