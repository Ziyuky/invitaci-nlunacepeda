import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <CountdownSection />
      <EventSection />
      <GallerySection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
