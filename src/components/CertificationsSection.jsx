import { Award, ExternalLink, Code2, Database, Coffee } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "IBM (edX)",
    icon: Code2,
    url: "#", // Link to be added later
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    icon: Database,
    url: "#", // Link to be added later
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    icon: Coffee,
    url: "https://www.udemy.com/certificate/UC-4c24ba98-5102-4cdf-b414-7421c7a439b1/",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-section p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-8 md:mb-10">
            Certified & Skilled
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 md:p-8 rounded-xl bg-card border border-border/60 card-hover text-center"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-foreground/50">{cert.issuer}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-1.5 text-xs rounded-lg border transition-all ${
                      cert.url === "#"
                        ? "border-border/40 text-foreground/40 cursor-default"
                        : "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                    }`}
                    onClick={cert.url === "#" ? (e) => e.preventDefault() : undefined}
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
