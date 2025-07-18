import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced analytics and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'AI Dashboard',
      description: 'Real-time analytics dashboard with AI-powered insights and predictions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with multi-chain support.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      category: 'blockchain',
      technologies: ['Solidity', 'Web3.js', 'React', 'MetaMask'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'IoT Smart Home',
      description: 'Complete IoT ecosystem for smart home automation and monitoring.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      category: 'iot',
      technologies: ['Arduino', 'Raspberry Pi', 'Node.js', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Enterprise CRM',
      description: 'Comprehensive customer relationship management system for enterprises.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
              Explore our innovative projects that showcase cutting-edge technology and exceptional design
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Filter size={20} />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`hover-glow transition-all duration-300 ${
                    activeFilter === category.id ? 'pulse-primary' : ''
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass hover-glow group cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="hover-glow">
                      <Eye size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="hover-glow">
                      <Github size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="hover-glow">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;