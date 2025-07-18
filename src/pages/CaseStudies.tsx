import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, TrendingUp, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Revolution',
      subtitle: 'Digital Banking Platform',
      description: 'Transformed traditional banking with a comprehensive digital platform that increased customer engagement by 300% and reduced operational costs by 40%.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      category: 'FinTech',
      duration: '8 months',
      team: '12 experts',
      results: [
        { metric: 'User Growth', value: '300%', icon: Users },
        { metric: 'Cost Reduction', value: '40%', icon: DollarSign },
        { metric: 'Performance', value: '500%', icon: TrendingUp }
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Blockchain', 'AI/ML'],
      challenges: [
        'Legacy system integration',
        'Real-time transaction processing',
        'Regulatory compliance',
        'Security at scale'
      ],
      solutions: [
        'Microservices architecture',
        'Event-driven processing',
        'Automated compliance checks',
        'Zero-trust security model'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Innovation',
      subtitle: 'Telemedicine Platform',
      description: 'Revolutionized healthcare delivery with an AI-powered telemedicine platform that connected 50,000+ patients with healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      category: 'Healthcare',
      duration: '6 months',
      team: '8 experts',
      results: [
        { metric: 'Patient Reach', value: '50K+', icon: Users },
        { metric: 'Time Savings', value: '75%', icon: Clock },
        { metric: 'Satisfaction', value: '98%', icon: TrendingUp }
      ],
      technologies: ['React Native', 'Python', 'TensorFlow', 'WebRTC', 'HIPAA'],
      challenges: [
        'HIPAA compliance',
        'Real-time video quality',
        'AI diagnosis accuracy',
        'Cross-platform compatibility'
      ],
      solutions: [
        'End-to-end encryption',
        'Adaptive streaming technology',
        'Federated learning models',
        'Progressive web application'
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Transformation',
      subtitle: 'AI-Powered Shopping Experience',
      description: 'Created an intelligent e-commerce platform with personalized recommendations that boosted sales by 250% and improved customer retention.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'E-Commerce',
      duration: '10 months',
      team: '15 experts',
      results: [
        { metric: 'Sales Growth', value: '250%', icon: DollarSign },
        { metric: 'Retention', value: '85%', icon: Users },
        { metric: 'Conversion', value: '180%', icon: TrendingUp }
      ],
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      challenges: [
        'Scalability requirements',
        'Real-time inventory',
        'Payment security',
        'Recommendation accuracy'
      ],
      solutions: [
        'Kubernetes orchestration',
        'Event sourcing pattern',
        'PCI DSS compliance',
        'Deep learning algorithms'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
              Real-world success stories showcasing our expertise in delivering transformative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className="mb-4 pulse-primary">
                    {study.category}
                  </Badge>
                  <h2 className="text-4xl font-bold mb-2 gradient-text">
                    {study.title}
                  </h2>
                  <h3 className="text-xl text-muted-foreground mb-6">
                    {study.subtitle}
                  </h3>
                  <p className="text-lg mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="glass p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Clock size={20} />
                        <span className="font-medium">Duration</span>
                      </div>
                      <p className="text-lg font-bold">{study.duration}</p>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Users size={20} />
                        <span className="font-medium">Team Size</span>
                      </div>
                      <p className="text-lg font-bold">{study.team}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center glass p-4 rounded-lg hover-glow">
                        <result.icon size={24} className="mx-auto text-primary mb-2" />
                        <p className="text-2xl font-bold gradient-text">{result.value}</p>
                        <p className="text-sm text-muted-foreground">{result.metric}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="hover-glow group">
                    View Full Case Study
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="glass overflow-hidden hover-glow group">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="hover-glow">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;