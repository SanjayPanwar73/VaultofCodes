import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoGrid />
      <About />
      <Contact />
    </div>
  );
};

export default Index;