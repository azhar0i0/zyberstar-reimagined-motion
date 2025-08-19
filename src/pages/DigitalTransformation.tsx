import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, TrendingUp, Users, CheckCircle, ArrowRight, BarChart, Cloud, Shield } from 'lucide-react';

const DigitalTransformation = () => {
  const services = [
    { 
      icon: Cloud, 
      title: "Cloud Migration", 
      description: "Seamless transition to cloud platforms for improved scalability and cost efficiency" 
    },
    { 
      icon: BarChart, 
      title: "Data Analytics", 
      description: "Turn your data into actionable insights with advanced analytics solutions" 
    },
    { 
      icon: Shield, 
      title: "Digital Security", 
      description: "Comprehensive cybersecurity solutions to protect your digital assets" 
    },
    { 
      icon: Users, 
      title: "Process Automation", 
      description: "Streamline operations with intelligent automation and workflow optimization" 
    }
  ];

  const benefits = [
    "Increased Operational Efficiency",
    "Enhanced Customer Experience",
    "Data-Driven Decision Making",
    "Improved Competitive Advantage",
    "Cost Reduction & ROI Growth",
    "Future-Ready Technology Stack"
  ];

  const transformationAreas = [
    { title: "Legacy System Modernization", description: "Upgrade outdated systems with modern, cloud-native solutions" },
    { title: "Digital Customer Experience", description: "Create seamless omnichannel experiences for your customers" },
    { title: "Data & Analytics Platform", description: "Build comprehensive data pipelines and analytics capabilities" },
    { title: "Process Digitization", description: "Automate manual processes and eliminate inefficiencies" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Digital Transformation Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your <span className="gradient-text">Business</span> Digitally
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Accelerate your digital journey with comprehensive transformation strategies that modernize operations, enhance customer experiences, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              End-to-end digital transformation services designed to revolutionize your business operations and strategy
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

      {/* Transformation Areas */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Key <span className="gradient-text">Transformation Areas</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We focus on critical areas that deliver maximum impact and sustainable business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                      <p className="text-foreground/70">{area.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Drive <span className="gradient-text">Measurable Results</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Our digital transformation approach delivers tangible business outcomes that position your organization for long-term success in the digital economy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-border/30">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Success Metrics</h3>
                    <p className="text-foreground/70">Average improvements across our clients</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Operational Efficiency</span>
                      <span className="text-2xl font-bold text-primary">+45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Cost Reduction</span>
                      <span className="text-2xl font-bold text-primary">-30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Time to Market</span>
                      <span className="text-2xl font-bold text-primary">-50%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Customer Satisfaction</span>
                      <span className="text-2xl font-bold text-primary">+60%</span>
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

export default DigitalTransformation;