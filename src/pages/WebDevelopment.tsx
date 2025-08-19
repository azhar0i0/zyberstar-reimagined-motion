import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const WebDevelopment = () => {
  const technologies = [
    { name: "React & Next.js", description: "Modern frontend frameworks for dynamic web applications" },
    { name: "Node.js & Express", description: "Robust backend solutions for scalable APIs" },
    { name: "TypeScript", description: "Type-safe development for better code quality" },
    { name: "PostgreSQL & MongoDB", description: "Reliable database solutions for data management" }
  ];

  const features = [
    "Responsive Design for All Devices",
    "SEO-Optimized Architecture", 
    "Fast Loading Performance",
    "Secure & Scalable Solutions",
    "Progressive Web Apps (PWA)",
    "API Integration & Development"
  ];

  const process = [
    { step: "Discovery", description: "Understanding your business requirements and goals" },
    { step: "Design", description: "Creating wireframes and visual designs" },
    { step: "Development", description: "Building your application with best practices" },
    { step: "Testing", description: "Comprehensive testing for quality assurance" },
    { step: "Deployment", description: "Launching your application to production" },
    { step: "Support", description: "Ongoing maintenance and feature updates" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Code className="w-4 h-4" />
            Web Development Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build <span className="gradient-text">Powerful</span> Web Applications
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Create stunning, responsive, and high-performance web applications that drive business growth and deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Cutting-Edge <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We use the latest technologies and frameworks to build modern, scalable web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-center">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our <span className="gradient-text">Web Development</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                We deliver web applications that not only look great but perform exceptionally well across all devices and platforms.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-border/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Responsive Design</h3>
                      <p className="text-sm text-foreground/70">Works perfectly on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">High Performance</h3>
                      <p className="text-sm text-foreground/70">Optimized for speed and efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Mobile First</h3>
                      <p className="text-sm text-foreground/70">Designed for mobile experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-xl">{item.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default WebDevelopment;