import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Link, Coins, FileText, CheckCircle, ArrowRight, Lock, TrendingUp, Globe } from 'lucide-react';

const BlockchainSolutions = () => {
  const services = [
    { 
      icon: Coins, 
      title: "Cryptocurrency Development", 
      description: "Custom token creation, DeFi protocols, and cryptocurrency exchange platforms" 
    },
    { 
      icon: FileText, 
      title: "Smart Contracts", 
      description: "Automated, secure, and transparent smart contract development and auditing" 
    },
    { 
      icon: Link, 
      title: "DApp Development", 
      description: "Decentralized applications built on Ethereum, Polygon, and other blockchains" 
    },
    { 
      icon: Shield, 
      title: "Blockchain Security", 
      description: "Comprehensive security audits and penetration testing for blockchain systems" 
    }
  ];

  const features = [
    "Immutable Transaction Records",
    "Decentralized Architecture",
    "Smart Contract Automation",
    "Enhanced Security & Transparency",
    "Reduced Transaction Costs",
    "Global Accessibility"
  ];

  const useCases = [
    { 
      title: "Supply Chain Transparency", 
      description: "Track products from origin to consumer with immutable blockchain records",
      icon: Globe
    },
    { 
      title: "Digital Identity Management", 
      description: "Secure, decentralized identity verification and authentication systems",
      icon: Lock
    },
    { 
      title: "Decentralized Finance (DeFi)", 
      description: "Build lending, borrowing, and trading platforms without intermediaries",
      icon: TrendingUp
    },
    { 
      title: "NFT Marketplaces", 
      description: "Create and trade unique digital assets with blockchain verification",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Link className="w-4 h-4" />
            Blockchain Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build the Future with <span className="gradient-text">Blockchain</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Revolutionize your business with secure, transparent, and decentralized blockchain solutions that eliminate intermediaries and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Explore Blockchain <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Blockchain Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Blockchain Services</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              End-to-end blockchain development services from concept to deployment and beyond
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
              Blockchain <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover how blockchain technology can transform various industries and business processes
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

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Blockchain</span>?
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Blockchain technology offers unprecedented security, transparency, and efficiency for modern business operations.
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
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Blockchain Benefits</h3>
                    <p className="text-foreground/70">Key advantages of blockchain implementation</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Shield className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Security Enhancement</h4>
                        <p className="text-sm text-foreground/70">Cryptographic protection against fraud</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Cost Reduction</h4>
                        <p className="text-sm text-foreground/70">Eliminate intermediary fees</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Globe className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Global Accessibility</h4>
                        <p className="text-sm text-foreground/70">24/7 worldwide transactions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Lock className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Transparency</h4>
                        <p className="text-sm text-foreground/70">Immutable audit trails</p>
                      </div>
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
            Ready to <span className="gradient-text">Revolutionize</span> Your Business?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join the blockchain revolution and transform your business with secure, transparent, and efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow">
              Start Blockchain Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Blockchain Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainSolutions;