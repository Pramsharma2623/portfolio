/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { EducationAchievements } from "./components/EducationAchievements";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-[var(--color-bg)]">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><EducationAchievements /></div>
      <Footer />
    </main>
  );
}


