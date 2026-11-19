import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NewsSection } from './components/NewsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="it-women-backdrop min-h-screen text-[#F6F3FA]">
        <Navbar />
        <main>
          <HeroSection />
          <NewsSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
        </main>
        <ContactSection />
      </div>
    </MotionConfig>
  );
}
