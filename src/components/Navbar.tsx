import { motion } from "motion/react";
import { resumeData } from "../data";

export function Navbar() {
  const { basics } = resumeData;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-display font-bold text-2xl tracking-tighter text-white">
          {basics.name.split(" ")[0]}
          <span className="text-[var(--color-primary)]">.</span>
        </span>
        
        <div className="hidden md:flex gap-8 font-medium text-sm text-[var(--color-text-muted)]">
          <a href="#experience" className="hover:text-[var(--color-primary)] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[var(--color-primary)] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[var(--color-primary)] transition-colors">Skills</a>
          <a href="#education" className="hover:text-[var(--color-primary)] transition-colors">Education</a>
        </div>
      </div>
    </motion.nav>
  );
}

