import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock } from "lucide-react";
import gamingThumb from "@/assets/gaming-thumb.jpg";
import footballThumb from "@/assets/football-thumb.jpg";
import ecommerceThumb from "@/assets/ecommerce-thumb.jpg";
import documentaryThumb from "@/assets/documentary-thumb.jpg";

interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  views: string;
  description: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Epic Gaming Montage",
    category: "Gaming",
    thumbnail: gamingThumb,
    duration: "2:45",
    views: "1.2M",
    description: "High-energy gaming compilation with dynamic effects and music sync"
  },
  {
    id: "2",
    title: "Football Highlights Reel",
    category: "Sports",
    thumbnail: footballThumb,
    duration: "3:20",
    views: "850K",
    description: "Professional football highlights with cinematic slow-motion effects"
  },
  {
    id: "3",
    title: "Premium Product Showcase",
    category: "eCommerce",
    thumbnail: ecommerceThumb,
    duration: "1:30",
    views: "2.1M",
    description: "Elegant product advertisement with studio lighting and smooth transitions"
  },
  {
    id: "4",
    title: "Documentary Short Film",
    category: "Documentary",
    thumbnail: documentaryThumb,
    duration: "8:15",
    views: "650K",
    description: "Professional documentary-style storytelling with cinematic color grading"
  },
  {
    id: "5",
    title: "Gaming Stream Highlights",
    category: "Gaming",
    thumbnail: gamingThumb,
    duration: "4:30",
    views: "920K",
    description: "Engaging gaming stream highlights with animated overlays"
  },
  {
    id: "6",
    title: "Sports Commentary Edit",
    category: "Sports",
    thumbnail: footballThumb,
    duration: "5:45",
    views: "1.5M",
    description: "Dynamic sports commentary with multi-camera editing"
  }
];

const categories = ["All", "Gaming", "Sports", "eCommerce", "Documentary", "Animation", "Color Grading"];

const VideoGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of video editing expertise across different styles and industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="outline"
              className={`filter-button ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {filteredVideos.map((video, index) => (
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <div 
                  className="video-card group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 hero-glow">
                        <Play className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                      {video.category}
                    </Badge>
                    
                    {/* Stats */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {video.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {video.views}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl bg-background border-border">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Video player would be embedded here</p>
                    <p className="text-sm text-muted-foreground mt-2">{video.title}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;