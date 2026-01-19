import { Sidebar } from '@/components/Sidebar';
import { HeroSection } from '@/components/HeroSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ResearchSection } from '@/components/ResearchSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import AboutMe from '@/components/AboutMe';
// import TravelMap from '@/components/StudyAbroadMap';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-16 lg:ml-56">
        
        <HeroSection />
        <AboutMe/>
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        {/* <TravelMap/> */}
        
        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-xs text-muted-foreground mb-2">
              built with persistence and innovation
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 2025 andrew c. photinakis
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;