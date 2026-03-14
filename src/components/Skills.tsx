import { motion } from "motion/react";
import { resumeData } from "../data";

export function Skills() {
  const { skills } = resumeData;

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
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-[var(--color-primary)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--color-primary)]/30 transition-colors"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6 tracking-wide">
                {skillGroup.group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-black/50 border border-white/5 rounded-xl text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

