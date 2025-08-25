import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@editkaro.in",
    href: "mailto:hello@editkaro.in"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, India",
    href: "#"
  }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" }
];

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into captivating visual stories? Get in touch with our team and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="glass-card border-[var(--glass-border)] focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="glass-card border-[var(--glass-border)] focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="glass-card border-[var(--glass-border)] focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <Input 
                  placeholder="e.g., Gaming Video, Product Ad, Documentary" 
                  className="glass-card border-[var(--glass-border)] focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project ideas, timeline, and budget..."
                  rows={5}
                  className="glass-card border-[var(--glass-border)] focus:ring-primary resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hero-glow">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="glass-card p-6 hover:hero-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="glass-card p-6 animate-fade-in-up">
              <h3 className="font-semibold text-foreground mb-4">Follow Our Work</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 hero-glow"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Check out our latest work and behind-the-scenes content on our social channels.
              </p>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card p-6 bg-gradient-hero animate-fade-in">
              <h3 className="font-semibold text-foreground mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Book a free consultation call to discuss your project requirements and get a custom quote.
              </p>
              <Button variant="outline" className="glass-card border-[var(--glass-border)]">
                Schedule Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;