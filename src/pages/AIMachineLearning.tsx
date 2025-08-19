import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Bot, BarChart3, Cpu, CheckCircle, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

const AIMachineLearning = () => {
  const services = [
    { 
      icon: Brain, 
      title: "Machine Learning Models", 
      description: "Custom ML models for predictive analytics, classification, and pattern recognition" 
    },
    { 
      icon: Bot, 
      title: "AI Chatbots & Assistants", 
      description: "Intelligent conversational AI solutions for customer service and automation" 
    },
    { 
      icon: BarChart3, 
      title: "Data Analytics & Insights", 
      description: "Advanced analytics platforms that turn raw data into actionable business intelligence" 
    },
    { 
      icon: Cpu, 
      title: "Computer Vision", 
      description: "Image recognition, object detection, and visual processing solutions" 
    }
  ];

  const capabilities = [
    "Natural Language Processing (NLP)",
    "Predictive Analytics & Forecasting",
    "Recommendation Systems",
    "Automated Decision Making",
    "Deep Learning & Neural Networks",
    "Real-time Data Processing"
  ];

  const useCases = [
    { 
      title: "Predictive Maintenance", 
      description: "Reduce downtime and maintenance costs with AI-powered equipment monitoring",
      icon: TrendingUp
    },
    { 
      title: "Customer Behavior Analysis", 
      description: "Understand customer patterns and optimize marketing strategies with ML insights",
      icon: BarChart3
    },
    { 
      title: "Fraud Detection", 
      description: "Protect your business with intelligent fraud detection and prevention systems",
      icon: Shield
    },
    { 
      title: "Process Automation", 
      description: "Automate complex business processes with intelligent AI-driven workflows",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Brain className="w-4 h-4" />
            AI & Machine Learning Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Harness the Power of <span className="gradient-text">Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI and machine learning solutions that automate processes, predict outcomes, and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Explore AI Solutions <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              AI Readiness Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Advanced <span className="gradient-text">AI Solutions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive AI and machine learning services tailored to your specific business needs and objectives
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

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Real-World <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover how AI can solve complex business challenges and drive innovation across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass border-border/30 hover-glow group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <p className="text-foreground/70">{useCase.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Cutting-Edge <span className="gradient-text">AI Capabilities</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Leverage the latest advances in artificial intelligence and machine learning to gain competitive advantages and drive innovation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-border/30">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">AI Impact Metrics</h3>
                    <p className="text-foreground/70">Average improvements with our AI solutions</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Process Efficiency</span>
                      <span className="text-2xl font-bold text-primary">+300%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Prediction Accuracy</span>
                      <span className="text-2xl font-bold text-primary">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Cost Reduction</span>
                      <span className="text-2xl font-bold text-primary">-40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/80">Decision Speed</span>
                      <span className="text-2xl font-bold text-primary">10x</span>
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
            Ready to <span className="gradient-text">Embrace</span> AI Innovation?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's explore how artificial intelligence can revolutionize your business operations and unlock new growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Start AI Journey <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Book AI Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMachineLearning;