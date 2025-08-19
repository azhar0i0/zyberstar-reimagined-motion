import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, GitBranch, Server, Shield, CheckCircle, ArrowRight, Zap, BarChart, Settings, Lock } from 'lucide-react';

const CloudDevOps = () => {
  const services = [
    { 
      icon: Cloud, 
      title: "Cloud Migration", 
      description: "Seamless migration to AWS, Azure, Google Cloud with zero downtime strategies" 
    },
    { 
      icon: GitBranch, 
      title: "CI/CD Pipelines", 
      description: "Automated deployment pipelines for faster, more reliable software delivery" 
    },
    { 
      icon: Server, 
      title: "Infrastructure as Code", 
      description: "Scalable, version-controlled infrastructure management and provisioning" 
    },
    { 
      icon: Shield, 
      title: "Security & Monitoring", 
      description: "Comprehensive security implementation and 24/7 system monitoring" 
    }
  ];

  const benefits = [
    "99.9% Uptime Guarantee",
    "Auto-Scaling Infrastructure",
    "Disaster Recovery Planning",
    "Cost Optimization Strategies",
    "Security Best Practices",
    "Performance Monitoring"
  ];

  const cloudPlatforms = [
    { 
      title: "Amazon Web Services (AWS)", 
      description: "Complete AWS solutions including EC2, Lambda, RDS, and S3 implementation",
      icon: Cloud
    },
    { 
      title: "Microsoft Azure", 
      description: "Azure cloud services with Active Directory integration and hybrid solutions",
      icon: Settings
    },
    { 
      title: "Google Cloud Platform", 
      description: "GCP solutions leveraging AI/ML services and BigQuery analytics",
      icon: BarChart
    },
    { 
      title: "Multi-Cloud Strategy", 
      description: "Hybrid and multi-cloud architectures for maximum flexibility and reliability",
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Cloud className="w-4 h-4" />
            Cloud & DevOps Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scale with <span className="gradient-text">Cloud & DevOps</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Accelerate your development lifecycle and scale your infrastructure with enterprise-grade cloud solutions and DevOps practices that ensure reliability, security, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Start Cloud Journey <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Cloud Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Cloud Solutions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From migration to optimization, we provide end-to-end cloud and DevOps services
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

      {/* Cloud Platforms Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Multi-Cloud <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We work with all major cloud platforms to find the perfect solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <platform.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{platform.title}</CardTitle>
                      <p className="text-foreground/70">{platform.description}</p>
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
                Enterprise-Grade <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Build resilient, scalable, and secure cloud infrastructure that grows with your business and ensures optimal performance.
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
                    <h3 className="text-2xl font-bold mb-2">Performance Metrics</h3>
                    <p className="text-foreground/70">Average improvements with our solutions</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Deployment Speed</span>
                      <span className="text-2xl font-bold text-primary">10x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Infrastructure Costs</span>
                      <span className="text-2xl font-bold text-primary">-60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">System Uptime</span>
                      <span className="text-2xl font-bold text-primary">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Recovery Time</span>
                      <span className="text-2xl font-bold text-primary">&lt;5min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Scale</span> Your Infrastructure?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's build a cloud infrastructure that powers your business growth and ensures reliability at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Start Cloud Migration <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Infrastructure Review
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudDevOps;