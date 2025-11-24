import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Instagram, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/taha-moazzam-mern",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:shadow-pink-500/50"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:contact@interactionprivate.com",
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];
  
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating on AI projects, full-stack development, or discussing innovative tech solutions? 
            Let's build something amazing together!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-400">Pakistan</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Availability</h3>
                <p className="text-gray-400">Open to new opportunities and collaborations</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${social.color} rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 shadow-lg ${social.hoverColor}`}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-gray-500"
        >
          <p className="mb-2">© 2024 Taha Moazzam Mern. All rights reserved.</p>
          <p className="text-sm">Software Developer | AI Enthusiast | Startup Founder</p>
        </motion.div>
      </div>
    </section>
  );
}
