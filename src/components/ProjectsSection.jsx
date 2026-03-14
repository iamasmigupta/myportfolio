import { Github, ExternalLink, Clock } from "lucide-react";

const projects = [
  {
    title: "WorkSphere — Employee Management System",
    description:
      "Full-stack EMS with admin & employee dashboards, attendance tracking, leave management, salary & PDF exports. Secure JWT authentication and role-based access control.",
    role: "Full-stack developer",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/iamasmigupta/employee-management-system",
    liveUrl: "https://worksphere-management-system.vercel.app",
    image: "/projects/worksphere.png",
  },
  {
    title: "HireGenius — AI-Powered Interview Platform",
    description:
      "AI-proctored interviews with face detection via OpenCV, speech-to-text using Groq Whisper, auto-generated questions via Gemini AI, and automated scoring.",
    role: "Lead developer, built AI pipeline & full-stack UI",
    tags: ["React", "Node.js", "Gemini AI", "Groq Whisper", "Python", "OpenCV"],
    githubUrl: "https://github.com/iamasmigupta/hiregenius-ai-platform",
    liveUrl: "https://letshiregenius.vercel.app",
    image: "/projects/hiregenius.png",
  },
  {
    title: "Gadget Website — E-Commerce App",
    description:
      "Responsive full-stack e-commerce app with Stripe payment integration, Sanity CMS for product management, and SSR optimization for blazing performance.",
    role: "Full-stack developer",
    tags: ["Next.js", "React", "Stripe", "Sanity CMS"],
    githubUrl: "https://github.com/iamasmigupta/Gadget_Website",
    liveUrl: "https://gadgetmasteryhub.vercel.app/",
    image: "/projects/gadget.png",
  },
  {
    title: "Journal Subscription Portal",
    description:
      "A journal subscription management portal for academic and professional journals. Currently under active development.",
    role: "Developer — Currently Working On 🚧",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/ShreyuCh10/journal-subscription-portal",
    liveUrl: "",
    inProgress: true,
  },
  {
    title: "Retro Snake Burger Edition",
    description:
      "A retro 2D snake game where you eat burgers and beat your high score. Classic gameplay with a fun twist!",
    role: "Solo developer",
    tags: ["Python", "Pygame"],
    githubUrl: "https://github.com/iamasmigupta/snake-burger-game",
    liveUrl: "",
  },
  {
    title: "Endless Wheel Runner",
    description:
      "An endless runner game where a rolling wheel dodges obstacles across lanes. Built with Unity game engine.",
    role: "Game developer",
    tags: ["Unity", "C#"],
    githubUrl: "https://github.com/iamasmigupta/The-Wheel-Runner",
    liveUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-section p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-3 md:mb-4">
            Projects
          </h2>
          <p className="text-foreground/50 mb-8 md:mb-10 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            Here are some of my recent projects — each crafted with attention to detail, performance, and user experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-card rounded-xl overflow-hidden border card-hover flex flex-col text-left ${
                  project.inProgress ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
                }`}
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                  </div>
                ) : (
                  /* Gradient header for projects without images */
                  <div className={`h-2 sm:h-3 ${
                    project.inProgress
                      ? "bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"
                      : "bg-gradient-to-r from-primary via-purple-500 to-indigo-500"
                  }`}></div>
                )}

                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary leading-tight">
                      {project.title}
                    </h3>
                    {project.inProgress && (
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/60 text-xs sm:text-sm mb-2 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-foreground/40 text-[10px] sm:text-xs italic mb-3 md:mb-4">
                    {project.role}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-card border border-border text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg cosmic-button"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
