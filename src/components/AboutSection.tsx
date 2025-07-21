import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: Award,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: Clock,
      number: '4+',
      label: 'Years Experience',
      description: 'In cutting-edge development'
    },
    {
      icon: CheckCircle,
      number: '98%',
      label: 'Success Rate',
      description: 'Client satisfaction guaranteed'
    }
  ];

  const values = [
    'Enterprise-grade software solutions',
    'AI-powered applications and automation',
    'Scalable cloud-native architectures',
    'Agile development with rapid delivery',
    'End-to-end digital transformation',
    'Continuous support and maintenance'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent/20 mb-6">
              <span className="text-sm text-accent font-medium">About ZyberStar</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We build <span className="gradient-text">enterprise-grade solutions</span> that scale with your business
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Founded in 2020, ZyberStar has evolved into a leading software development company specializing in 
              cutting-edge technologies including AI, blockchain, cloud computing, and enterprise applications. 
              We partner with businesses of all sizes to deliver innovative solutions that drive digital transformation.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{value}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="hover-glow"
              onClick={() => window.location.href = '/information'}
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Achievement Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass hover-glow group border-border/30">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground/90">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'MongoDB', 
              'PostgreSQL', 'AWS', 'Docker', 'Unity', 'Unreal Engine', 'AI/ML'
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover-glow transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;