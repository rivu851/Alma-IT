import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AlumniDirectory from "@/components/AlumniDirectory";
import EventsSection from "@/components/EventsSection";
import JobBoard from "@/components/JobBoard";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AlumniDirectory />
      <EventsSection />
      <JobBoard />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
