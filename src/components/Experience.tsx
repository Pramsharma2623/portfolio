import { motion } from "motion/react";
import { resumeData } from "../data";

export function Experience() {
  const { experience } = resumeData;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-[var(--color-primary)]" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 group relative"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[24%] top-0 bottom-[-3rem] w-px bg-white/10 group-last:hidden" />
              
              <div className="md:col-span-1 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute right-[-2.1rem] top-2 w-3 h-3 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] z-10" />
                
                <p className="font-mono text-sm text-[var(--color-primary)] mb-2">
                  {exp.dates}
                </p>
                {exp.location && (
                  <p className="font-mono text-xs text-[var(--color-text-muted)] opacity-60">
                    {exp.location}
                  </p>
                )}
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--color-primary)]/30 transition-colors">
                <h3 className="text-2xl font-display font-bold mb-1 text-white">
                  {exp.company}
                </h3>
                <h4 className="text-lg text-[var(--color-text-muted)] mb-6 font-medium">
                  {exp.role}
                </h4>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

