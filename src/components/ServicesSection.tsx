import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Palette, Brain, Shield, Cloud } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Cutting-edge websites and applications built for performance, scalability, and elegance—perfectly tailored to your business.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'We modernize legacy systems and automate workflows to drive your business forward with intelligent, digital-first solutions.',
      features: ['System Modernization', 'Workflow Automation', 'Cloud Migration', 'Data Analytics']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to captivate users and boost conversion across all digital platforms.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.',
      features: ['Custom AI Models', 'Data Analytics', 'Process Automation', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized applications using cutting-edge blockchain technologies.',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Cryptocurrency Solutions']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines for modern applications.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 pt-32">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Idea to <span className="gradient-text">Completion</span>,<br />
            We Bring <span className="gradient-text">Full-Stack Expertise</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Elevate your digital presence with comprehensive development, design, and transformation solutions tailored just for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass hover-glow group cursor-pointer transition-all duration-500 hover:scale-105 border-border/30"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mb-4 rounded-lg bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/70 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group/btn text-primary hover:text-primary-foreground hover:bg-primary mt-4"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/80 mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg pulse-primary hover-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;