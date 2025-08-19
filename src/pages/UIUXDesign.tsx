import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Eye, MousePointer, Smartphone, CheckCircle, ArrowRight, Users, Zap, Heart } from 'lucide-react';

const UIUXDesign = () => {
  const services = [
    { 
      icon: Eye, 
      title: "User Research", 
      description: "Deep insights into user behavior, needs, and pain points through comprehensive research" 
    },
    { 
      icon: Palette, 
      title: "UI Design", 
      description: "Beautiful, modern interfaces that align with your brand and delight users" 
    },
    { 
      icon: MousePointer, 
      title: "UX Strategy", 
      description: "Strategic user experience planning that drives engagement and conversions" 
    },
    { 
      icon: Smartphone, 
      title: "Mobile Design", 
      description: "Responsive designs optimized for mobile-first user experiences" 
    }
  ];

  const designPrinciples = [
    "User-Centered Design Approach",
    "Accessibility & Inclusivity Focus",
    "Data-Driven Design Decisions",
    "Consistent Design Systems",
    "Performance-Optimized Interfaces",
    "Cross-Platform Compatibility"
  ];

  const process = [
    { 
      phase: "Research & Discovery", 
      description: "Understanding users, business goals, and market landscape",
      icon: Users
    },
    { 
      phase: "Information Architecture", 
      description: "Structuring content and functionality for optimal user flow",
      icon: Eye
    },
    { 
      phase: "Wireframing & Prototyping", 
      description: "Creating interactive prototypes to validate design concepts",
      icon: MousePointer
    },
    { 
      phase: "Visual Design", 
      description: "Crafting beautiful interfaces with consistent design systems",
      icon: Palette
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Palette className="w-4 h-4" />
            UI/UX Design Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design <span className="gradient-text">Exceptional</span> User Experiences
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Create intuitive, engaging, and beautiful digital experiences that convert visitors into loyal customers through user-centered design principles.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Design Solutions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From initial research to final implementation, we provide comprehensive UI/UX design services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A proven methodology that ensures every design decision is backed by user insights and business objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Design That <span className="gradient-text">Delivers Results</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Our design philosophy centers on creating experiences that are not only visually stunning but also highly functional and user-friendly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-border/30">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Design Impact</h3>
                    <p className="text-foreground/70">Average results from our design projects</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Heart className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">User Satisfaction</h4>
                        <p className="text-2xl font-bold text-primary">+85%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Zap className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Conversion Rate</h4>
                        <p className="text-2xl font-bold text-primary">+120%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">User Engagement</h4>
                        <p className="text-2xl font-bold text-primary">+200%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default UIUXDesign;