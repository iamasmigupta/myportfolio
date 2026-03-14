import { useState } from "react";
import { Send, Mail, Linkedin, Github, FileText, FolderGit2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent! ✉️",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-3 md:mb-4">
          Get in Touch
        </h2>
        <p className="text-foreground/50 mb-8 md:mb-10 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left column: Connect + Quick Links */}
          <div className="space-y-4 md:space-y-6">
            {/* Let's Connect */}
            <div className="glass-section p-6 md:p-8 text-left">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-5">
                Let's Connect
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="mailto:itsasmigupta@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="truncate">itsasmigupta@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/asmi-gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/iamasmigupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-section p-6 md:p-8 text-left">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-5">
                Quick Links
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Contact Form */}
          <div className="glass-section p-6 md:p-8 text-left">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-xs sm:text-sm"
              />
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-xs sm:text-sm"
              />
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none text-xs sm:text-sm"
              ></textarea>
              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
