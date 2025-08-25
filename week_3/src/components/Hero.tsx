import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">Edit</span>karo.in
          </h1>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-8 hero-glow" />
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light animate-fade-in-up">
          Premium Video Editing & Social Media Marketing
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          Transform your content with cinematic visuals, engaging storytelling, and data-driven social media strategies that captivate audiences and drive results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button size="lg" className="hero-glow px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Play className="w-5 h-5 mr-2" />
            View Our Work
          </Button>
          <Button variant="outline" size="lg" className="glass-card px-8 py-4 text-lg rounded-full border-[var(--glass-border)]">
            Get Started
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-glow-pulse opacity-60" />
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-accent rounded-full animate-glow-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-glow-pulse opacity-50" />
    </section>
  );
};

export default Hero;