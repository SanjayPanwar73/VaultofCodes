import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Video, Palette, Zap, TrendingUp, Users, Award } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for all video formats with cinematic quality and storytelling expertise"
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Advanced color correction and grading to create the perfect mood and aesthetic"
  },
  {
    icon: Zap,
    title: "Motion Graphics",
    description: "Dynamic animations, titles, and visual effects that bring your content to life"
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Data-driven content strategies optimized for maximum engagement and reach"
  }
];

const stats = [
  { icon: Video, number: "500+", label: "Videos Created" },
  { icon: Users, number: "100+", label: "Happy Clients" },
  { icon: Award, number: "50+", label: "Awards Won" },
  { icon: TrendingUp, number: "10M+", label: "Total Views" }
];

const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Editkaro.in</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine creative expertise with technical precision to deliver video content that not only looks amazing but also drives results for your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in-up">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass-card p-8 text-center hover:hero-glow transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Our Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Short-form Videos", "Long-form Content", "Gaming Edits", 
              "Football Highlights", "eCommerce Ads", "Documentary Style",
              "Color Grading", "Anime Videos", "Social Media Content"
            ].map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="glass-card px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;