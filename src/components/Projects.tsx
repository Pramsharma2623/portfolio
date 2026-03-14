import { motion } from "motion/react";
import { resumeData } from "../data";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

export function Projects() {
  const { projects } = resumeData;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto" />
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
            >
              {/* Left Side: Project Description Card */}
              <div className="w-full lg:w-5/12 flex flex-col order-2 lg:order-1 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500 group-hover:border-[var(--color-primary)]/40 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h3>
                    {project.links && project.links.length > 0 && (
                      <div className="flex gap-3 shrink-0">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-primary)] hover:text-black transition-colors"
                          >
                            {link.name.toLowerCase() === 'github' ? (
                              <Github className="w-5 h-5" />
                            ) : (
                              <ExternalLink className="w-5 h-5" />
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-4 mt-auto">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Project Image */}
              <div className="w-full lg:w-7/12 order-1 lg:order-2">
                <div className="relative w-full aspect-video bg-white/5 border border-white/10 rounded-3xl overflow-hidden group-hover:border-[var(--color-primary)]/50 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                  
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100 relative z-10"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white/20 group-hover:text-[var(--color-primary)]/40 transition-colors duration-500">
                      <ImageIcon className="w-16 h-16 mb-4" />
                      <span className="text-sm font-mono">Screenshot Placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


