import "@fontsource/inter";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ShaderBackground from "./components/ShaderBackground";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ShaderBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
