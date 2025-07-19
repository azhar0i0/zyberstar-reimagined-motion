import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Zap, Layers } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rounded-lg transform rotate-45" />
        <div className="floating absolute top-40 right-20 w-20 h-20 border-2 border-accent/30 rounded-full" />
        <div className="floating absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-lg transform rotate-12" />
        <div className="floating absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/20 rounded-full" />
        <Code2 className="floating absolute top-32 right-1/3 w-8 h-8 text-primary/40" />
        <Zap className="floating absolute bottom-32 left-1/3 w-10 h-10 text-accent/40" />
        <Layers className="floating absolute top-1/2 left-16 w-6 h-6 text-primary/30" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in">
            <span className="text-sm text-primary font-medium">✨ Transforming Ideas Into Digital Reality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Transform Your Business with{' '}
            <span className="gradient-text">Cutting-Edge</span>{' '}
            <span className="gradient-text">Technology</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            We build exceptional software solutions that drive growth, enhance efficiency, and position your business for the future. From AI-powered applications to enterprise systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg pulse-primary hover-glow group"
            >
              Schedule Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg glass hover-glow border-primary/30 hover:border-primary/50"
            >
              See Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '150+', label: 'Happy Clients' },
              { number: '4+', label: 'Years Experience' },
              { number: '24/7', label: 'Global Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in glass p-4 rounded-lg hover-glow" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;