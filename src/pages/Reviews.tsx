import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'ZyberStar transformed our entire digital infrastructure. Their AI-powered solutions increased our efficiency by 400% and reduced operational costs significantly. The team is absolutely brilliant!',
      project: 'Enterprise AI Platform',
      metrics: {
        efficiency: '+400%',
        cost: '-60%',
        satisfaction: '99%'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'FinanceFlow Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'Working with ZyberStar was a game-changer. They delivered a complex blockchain solution ahead of schedule and under budget. Their expertise in emerging technologies is unmatched.',
      project: 'Blockchain Payment System',
      metrics: {
        performance: '+500%',
        security: '100%',
        uptime: '99.9%'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'HealthTech Innovations',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'The telemedicine platform ZyberStar built for us has revolutionized healthcare delivery. We now serve 10x more patients with the same resources. Exceptional work!',
      project: 'Telemedicine Platform',
      metrics: {
        reach: '+1000%',
        efficiency: '+300%',
        satisfaction: '98%'
      }
    },
    {
      id: 4,
      name: 'David Park',
      position: 'VP Engineering',
      company: 'RetailMega Corp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'ZyberStar built us an e-commerce platform that scales seamlessly. Their machine learning recommendations have boosted our sales by 250%. Outstanding technical expertise!',
      project: 'AI E-Commerce Platform',
      metrics: {
        sales: '+250%',
        conversion: '+180%',
        retention: '+150%'
      }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Product Manager',
      company: 'SmartCity Solutions',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'The IoT platform they developed manages our entire smart city infrastructure. Real-time monitoring and predictive analytics have reduced maintenance costs by 70%.',
      project: 'Smart City IoT Platform',
      metrics: {
        efficiency: '+350%',
        costs: '-70%',
        uptime: '99.8%'
      }
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Director of IT',
      company: 'Global Manufacturing',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      review: 'ZyberStar modernized our legacy systems with cloud-native solutions. The migration was seamless, and performance improvements exceeded all expectations. Highly recommended!',
      project: 'Cloud Migration & Modernization',
      metrics: {
        performance: '+400%',
        availability: '99.9%',
        scalability: '+800%'
      }
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Award, label: 'Projects Delivered', value: '500+' },
    { icon: TrendingUp, label: 'Success Rate', value: '99%' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Client Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
              See what industry leaders say about our transformative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
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

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="glass hover-glow group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote size={48} />
                </div>
                <CardContent className="p-6 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 border-t border-border/20 pt-4">
                    <Avatar className="hover-glow">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <Badge variant="outline" className="mt-4 hover-glow">
                    {testimonial.project}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="glass text-center hover-glow">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your business with cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover-glow pulse-primary font-medium">
                  Start Your Project
                </button>
                <button className="px-8 py-3 glass border border-border rounded-lg hover-glow">
                  Schedule Consultation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;