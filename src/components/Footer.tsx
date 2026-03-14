import { resumeData } from "../data";

export function Footer() {
  const { basics } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 text-center bg-black">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="font-display text-2xl font-bold mb-6 text-white">{basics.name}</h2>
        <div className="flex gap-6 mb-8">
          {basics.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${basics.email}`}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Email
          </a>
        </div>
        <p className="text-[var(--color-text-muted)] text-sm font-medium">
          © {currentYear} {basics.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

