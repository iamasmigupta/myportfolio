import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Crafting", "Building", "Developing", "Engaging"];

const socialLinks = [
  { icon: Github, href: "https://github.com/iamasmigupta", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/asmi-gupta", label: "LinkedIn" },
  { icon: Mail, href: "mailto:itsasmigupta@gmail.com", label: "Email" },
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10">
        
        {/* Profile Image */}
        <div className={`flex-shrink-0 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-br from-primary via-purple-500 to-indigo-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-subtle"></div>
            
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 bg-card shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Asmi Gupta"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -top-3 -right-3 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full animate-pulse-subtle"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`flex-1 text-center md:text-left space-y-4 md:space-y-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text not-italic">Asmi Gupta</span>
            <span className="ml-1 md:ml-2 text-3xl md:text-4xl">👋</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/60 font-medium leading-relaxed">
            <span className="text-primary font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
            {" "}Web Experiences with modern tech.
          </p>

          <p className="text-foreground/50 text-xs sm:text-sm md:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
            Specializing in Front-End and Back-End to build user-centric, functional solutions. 
            Driven by curiosity, I transform ideas into seamless, impactful apps.
          </p>

          <div className="flex flex-wrap justify-start gap-2.5 sm:gap-3 pt-1">
            <a href="https://drive.google.com/file/d/1KhyhFLLTfGJyEWNp3dzuzczCXDGUn-TK/view?usp=sharing" className="cosmic-button flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Resume
            </a>
            <a href="#projects" className="outline-button text-xs sm:text-sm">
              Explore My Work
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-start gap-3 pt-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-xs md:text-sm text-foreground/40 mb-1">Scroll Down</span>
        <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-primary" />
      </div>
    </section>
  );
};
