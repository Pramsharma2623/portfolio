import { motion } from "motion/react";
import { resumeData } from "../data";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown, User } from "lucide-react";

export function Hero() {
  const { basics } = resumeData;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Available for work</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter mb-6 leading-[0.9] text-glow">
              {basics.name.toUpperCase()}
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-muted)] font-medium mb-8 max-w-2xl">
              {basics.title}
            </h2>
            
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed mb-10">
              {basics.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center mb-10">
              <a
                href={`mailto:${basics.email}`}
                className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {basics.email}
              </a>
              <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
                <Phone className="w-4 h-4" />
                {basics.phone}
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4" />
                {basics.location}
              </span>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {basics.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] hover:scale-105 transition-all duration-300"
                >
                  {link.name === "GitHub" ? <Github className="w-6 h-6" /> : <Linkedin className="w-6 h-6" />}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full sm:rounded-[3rem] border-2 border-dashed border-white/20 flex flex-col items-center justify-center bg-white/5 overflow-hidden group hover:border-[var(--color-primary)]/50 transition-colors duration-500">
              {
                
                <img src="src\assets\WhatsApp Image 2026-03-14 at 1.53.10 AM.jpeg" alt="Pramod Kumar" className="w-full h-full object-cover" />
              }
              {/* <User className="w-16 h-16 text-white/20 group-hover:text-[var(--color-primary)]/50 mb-4 transition-colors duration-500" />
              <span className="text-[var(--color-text-muted)] font-mono text-sm group-hover:text-[var(--color-primary)] transition-colors duration-500 text-center px-4">
                Pramod kumar
              </span> */}
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[var(--color-text-muted)]" />
      </motion.div>
    </section>
  );
}

