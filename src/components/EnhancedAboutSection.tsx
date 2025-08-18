import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  Users, 
  Award, 
  Clock,
  Building2,
  Globe,
  Shield,
  Zap,
  Code,
  Brain,
  Rocket,
  Target,
  Heart,
  Lightbulb,
  Github,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const EnhancedAboutSection = () => {
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

  const coreValues = [
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

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@zyberstar.com', label: 'Email' }
  ];

  const footerLinks = {
    Services: [
      'Web Development',
      'Digital Transformation',
      'UI/UX Design',
      'Brand Strategy',
      'Game Development',
      'Social Media'
    ],
    Company: [
      'About Us',
      'Case Studies',
      'Careers',
      'Blog',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'Support',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Sitemap'
    ]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
        <div className="mt-20 mb-20 text-center">
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

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-5 glass mb-12">
            <TabsTrigger value="story" className="hover-glow">Our Story</TabsTrigger>
            <TabsTrigger value="technologies" className="hover-glow">Technologies</TabsTrigger>
            <TabsTrigger value="values" className="hover-glow">Our Values</TabsTrigger>
            <TabsTrigger value="certifications" className="hover-glow">Certifications</TabsTrigger>
            <TabsTrigger value="awards" className="hover-glow">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="space-y-8">
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {companyStats.map((stat, index) => (
                <Card key={index} className="glass text-center hover-glow">
                  <CardContent className="p-6">
                    <stat.icon size={32} className="mx-auto text-primary mb-4" />
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-foreground/60">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

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
                <Card key={index} className="glass hover-glow">
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
              {coreValues.map((value, index) => (
                <Card key={index} className="glass hover-glow">
                  <CardContent className="p-8">
                    <value.icon size={48} className="text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 gradient-text">{value.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{value.description}</p>
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
                <Card key={index} className="glass hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Award size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-medium mb-1">{award.year}</div>
                        <h3 className="font-bold mb-1">{award.award}</h3>
                        <p className="text-foreground/60 text-sm">{award.organization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Company Information Section */}
        <div className="mt-20 space-y-16">
          {/* Newsletter Section */}
          <div className="glass rounded-2xl p-8 border border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Stay updated with <span className="gradient-text">ZyberStar</span>
                </h3>
                <p className="text-foreground/70">
                  Get the latest insights on technology trends, case studies, and industry best practices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="px-6 py-3 hover-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">
                ZYBERSTAR
              </div>
              <p className="text-foreground/70 mb-6 max-w-md">
                Transforming businesses with cutting-edge technology solutions. 
                From concept to deployment, we bring your digital vision to life.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow group transition-all"
                  >
                    <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-foreground/70 hover:text-primary transition-colors text-sm animated-underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-8 bg-border/30" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © 2024 ZyberStar. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;