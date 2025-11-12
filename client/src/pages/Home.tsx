import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import StatisticsSection from "@/components/StatisticsSection";
import ProgramsSection from "@/components/ProgramsSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <StatisticsSection />
      <ProgramsSection />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
