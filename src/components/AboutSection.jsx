import { GraduationCap, Briefcase, Calendar, Code, Paintbrush, Award } from "lucide-react";

const education = [
  {
    title: "Master of Computer Application (MCA)",
    institution: "Bharati Vidyapeeth's Institute of Computer Application, GGSIPU",
    period: "Aug 2024 – June 2026",
    description: "CGPA: 9.03 — Final year MCA student passionate about building full-stack applications.",
  },
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "Vivekananda Institute of Professional Studies, GGSIPU",
    period: "Nov 2021 – June 2024",
    description: "CGPA: 8.56 — Strong foundation in CS fundamentals, web technologies, and software development.",
  },
  {
    title: "Senior Secondary (Class XII)",
    institution: "Sanatan Dharam Vidhya Mandir, CBSE",
    period: "2021",
    description: "Percentage: 94% — Panipat, Haryana",
  },
  {
    title: "Secondary (Class X)",
    institution: "Sanatan Dharam Vidhya Mandir, CBSE",
    period: "2019",
    description: "Percentage: 83.4% — Panipat, Haryana",
  },
];

const experience = [
  {
    title: "Graphic Design Head",
    company: "Artiste Society, VIPS",
    period: "2023 – 2024",
    description: "Led the Graphic Design Department. Supervised and mentored a team of student designers; organized workshops to enhance digital design skills.",
  },
  {
    title: "Graphic Design Intern",
    company: "Shavsi Media",
    period: "June 2022 – Aug 2022",
    description: "Created and managed Instagram posts, assisted in visual content development, and collaborated with the design team on promotional materials.",
  },
];

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building responsive web applications with React, Node.js, Express, and MongoDB (MERN Stack).",
  },
  {
    icon: Paintbrush,
    title: "UI/UX & Design",
    description: "Creating aesthetic, user-friendly interfaces with Tailwind CSS and modern design principles.",
  },
  {
    icon: Award,
    title: "Problem Solver",
    description: "Passionate about DSA with Java and tackling complex challenges with clean, efficient code.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto space-y-8 md:space-y-12">

        {/* About Card */}
        <div className="glass-section p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-4 md:mb-6">
            🧑‍💻 Dev. Builder. Designer. Me.
          </h2>
          <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto text-sm md:text-base lg:text-lg">
            I'm a final year MCA student passionate about building things that <em>actually</em> solve problems. 
            Whether it's architecting full-stack employee management systems, building AI-powered interview platforms, 
            or crafting beautiful e-commerce experiences — I'm always creating. 
            Skilled in <strong>C, Java, Python, React, Node.js, MongoDB, MySQL</strong> and always learning more.
          </p>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 md:p-5 rounded-xl bg-card border border-border card-hover text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 md:p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                    <service.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                    <p className="text-foreground/50 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="glass-section p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-8 md:mb-10">
            Journey So Far
          </h2>

          {/* Education */}
          <div className="mb-8 md:mb-10">
            <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl font-semibold mb-6 md:mb-8">
              <GraduationCap className="w-5 h-5 text-primary" /> Education
            </h3>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-indigo-500"></div>
              
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8 last:mb-0">
                  <div className="relative z-10 flex-shrink-0 w-8 sm:w-12 md:w-16 flex items-start justify-center pt-1">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-4 md:p-5 rounded-xl bg-card border border-border text-left card-hover">
                    <div className="flex flex-col gap-1 mb-2">
                      <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-primary text-xs md:text-sm">{item.institution}</p>
                      <span className="flex items-center gap-1 text-xs text-foreground/50">
                        <Calendar className="w-3 h-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-xs md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="flex items-center justify-center gap-2 text-lg md:text-xl font-semibold mb-6 md:mb-8">
              <Briefcase className="w-5 h-5 text-primary" /> Experience
            </h3>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-indigo-500"></div>
              
              {experience.map((item, index) => (
                <div key={index} className="relative flex gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8 last:mb-0">
                  <div className="relative z-10 flex-shrink-0 w-8 sm:w-12 md:w-16 flex items-start justify-center pt-1">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Briefcase className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-4 md:p-5 rounded-xl bg-card border border-border text-left card-hover">
                    <div className="flex flex-col gap-1 mb-2">
                      <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-primary text-xs md:text-sm">{item.company}</p>
                      <span className="flex items-center gap-1 text-xs text-foreground/50">
                        <Calendar className="w-3 h-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-xs md:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
