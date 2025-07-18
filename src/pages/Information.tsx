import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  Users, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Code, 
  Brain,
  Rocket,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

const Information = () => {
  const companyStats = [
    { icon: Building2, label: 'Founded', value: '2020' },
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Projects Completed', value: '500+' },
    { icon: Globe, label: 'Countries Served', value: '25+' }
  ];

  const technologies = [
    { 
      category: 'Frontend', 
      techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: Code
    },
    { 
      category: 'Backend', 
      techs: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'Ruby'],
      icon: Zap
    },
    { 
      category: 'Mobile', 
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      icon: Rocket
    },
    { 
      category: 'AI/ML', 
      techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn'],
      icon: Brain
    },
    { 
      category: 'Cloud', 
      techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      icon: Globe
    },
    { 
      category: 'Blockchain', 
      techs: ['Ethereum', 'Solidity', 'Web3.js', 'Hyperledger', 'Smart Contracts'],
      icon: Shield
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create solutions that didn\'t exist before.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to you.'
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'Every line of code is crafted with the highest standards of quality and security in mind.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We stay ahead of technology trends to ensure you always get cutting-edge solutions.'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'Microsoft Azure Expert',
    'Certified Kubernetes Administrator',
    'Blockchain Council Certified',
    'AI/ML Professional Certification'
  ];

  const awards = [
    {
      year: '2023',
      award: 'Best AI Innovation',
      organization: 'Tech Excellence Awards'
    },
    {
      year: '2023',
      award: 'Top Software Development Company',
      organization: 'Industry Leaders'
    },
    {
      year: '2022',
      award: 'Blockchain Innovation Award',
      organization: 'Crypto Summit'
    },
    {
      year: '2022',
      award: 'Excellence in Digital Transformation',
      organization: 'Digital Leaders Forum'
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
              Company Information
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
              Learn more about ZyberStar - your trusted partner in digital transformation and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {companyStats.map((stat, index) => (
              <Card key={index} className="glass text-center hover-glow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <stat.icon size={32} className="mx-auto text-primary mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5 glass mb-12">
              <TabsTrigger value="about" className="hover-glow">About Us</TabsTrigger>
              <TabsTrigger value="technologies" className="hover-glow">Technologies</TabsTrigger>
              <TabsTrigger value="values" className="hover-glow">Our Values</TabsTrigger>
              <TabsTrigger value="certifications" className="hover-glow">Certifications</TabsTrigger>
              <TabsTrigger value="awards" className="hover-glow">Awards</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="gradient-text text-3xl">Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg leading-relaxed mb-6">
                        Founded in 2020, ZyberStar emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. Our founders, with decades of combined experience in software development, AI, and digital transformation, recognized the need for a company that could truly understand both the technical complexities and business imperatives of modern organizations.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        Today, we're a team of 50+ passionate technologists, designers, and strategists who share a common goal: to help businesses harness the power of technology to achieve extraordinary results. From our headquarters to our global remote team, we work around the clock to deliver solutions that don't just meet expectations—they exceed them.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Our expertise spans across artificial intelligence, blockchain, cloud computing, mobile development, and enterprise software solutions. We've had the privilege of working with startups, scale-ups, and Fortune 500 companies across 25+ countries, helping them navigate their digital transformation journeys.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                        alt="Our team at work" 
                        className="rounded-lg hover-glow"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=300&fit=crop" 
                        alt="Innovation in action" 
                        className="rounded-lg hover-glow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technologies" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                  <Card key={index} className="glass hover-glow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <tech.icon size={24} className="text-primary" />
                        {tech.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tech.techs.map((t) => (
                          <Badge key={t} variant="outline" className="hover-glow">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="values" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="glass hover-glow animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <CardContent className="p-8">
                      <value.icon size={48} className="text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3 gradient-text">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-8">
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="gradient-text text-2xl">Team Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 border border-border/20 rounded-lg hover-glow">
                        <Award size={20} className="text-primary" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="awards" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                  <Card key={index} className="glass hover-glow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Award size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-primary font-medium mb-1">{award.year}</div>
                          <h3 className="font-bold mb-1">{award.award}</h3>
                          <p className="text-muted-foreground text-sm">{award.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Information;