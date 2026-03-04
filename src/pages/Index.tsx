import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import MetricsSection from "@/components/MetricsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <MetricsSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <TechStackSection />
      <ProcessSection />
      <GlobalPresenceSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
