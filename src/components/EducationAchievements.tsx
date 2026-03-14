import { motion } from "motion/react";
import { resumeData } from "../data";
import { Trophy, GraduationCap, ImageIcon } from "lucide-react";

export function EducationAchievements() {
  const { education, achievements } = resumeData;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Achievements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
          >
            <Trophy className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Achievements
            </h2>
          </motion.div>

          <div className="space-y-0">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10 group pb-12 last:pb-0"
              >
                <div className="absolute w-4 h-4 bg-[var(--color-bg)] border-2 border-[var(--color-primary)] rounded-full -left-[8.5px] top-1.5 group-hover:scale-125 group-hover:bg-[var(--color-primary)] transition-all" />
                <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">{achievement.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-4">
                  {achievement.context}
                </p>
                
                {/* Achievement Image Placeholder */}
                <div className="relative w-full max-w-sm h-40 sm:h-48 bg-black/50 border border-white/10 rounded-2xl overflow-hidden group-hover:border-[var(--color-primary)]/30 transition-colors duration-500">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20 group-hover:text-[var(--color-primary)]/40 transition-colors duration-500">
                      <ImageIcon className="w-8 h-8 mb-2" />
                      <span className="text-xs font-mono">Photo Placeholder</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-center gap-4"
          >
            <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--color-primary)]/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-display font-bold text-[var(--color-primary)]">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-sm text-[var(--color-text-muted)] shrink-0">
                    {edu.dates}
                  </span>
                </div>
                <p className="text-lg mb-4 text-white font-medium">{edu.institution}</p>
                <p className="font-mono text-sm text-[var(--color-text-muted)] bg-black/50 border border-white/5 inline-block px-3 py-1 rounded-md">
                  {edu.gpa}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


