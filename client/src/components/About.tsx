import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const timelineItems = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education",
    subtitle: "Bachelor's Program",
    description: "Strong foundation in computer science, software development, and cybersecurity",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "F&A Global",
    subtitle: "MTO, AI Team",
    description: "Contributing to AI projects and developing innovative solutions focused on practical applications of AI and machine learning",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Interaction Private Limited",
    subtitle: "Founder & Developer",
    description: "Leading software development and product design with focus on AI, full-stack development, and innovative software solutions",
    color: "from-orange-500 to-red-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate software developer and tech entrepreneur with experience in full-stack development, 
            AI applications, and cybersecurity solutions. My goal is to be recognized as a thought leader in AI 
            and tech entrepreneurship, with my work featured prominently online.
          </p>
        </motion.div>
        
        <div className="space-y-12 relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-lg text-blue-400 mb-3">{item.subtitle}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center my-4 md:my-0">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} ring-4 ring-gray-900 z-10`}></div>
              </div>
              
              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
