import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="py-8 md:py-10 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 md:mb-6"></div>

          {/* Copyright */}
          <p className="text-foreground/40 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Asmi Gupta | Built with 💜 and 💻
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-2.5 md:p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </>
  );
};
