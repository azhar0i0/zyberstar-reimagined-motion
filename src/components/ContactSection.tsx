import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'hello@zyberstar.com',
      link: 'mailto:hello@zyberstar.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      info: 'Available Worldwide',
      link: '#',
      description: 'Remote-first team'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 mb-8 animate-fade-in">
            <span className="text-sm text-primary font-medium">✨ Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass hover-glow animate-fade-in delay-300 border-border/20">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                  <Send className="w-8 h-8" />
                  Send us a message
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="glass h-12 border-border/30 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="glass h-12 border-border/30 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="glass h-12 border-border/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      className="glass resize-none border-border/30 focus:border-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full pulse-primary hover-glow group text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="glass hover-glow animate-fade-in border-border/20 group cursor-pointer" style={{ animationDelay: `${400 + index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-glow">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      <a 
                        href={item.link}
                        className="text-primary hover:text-accent transition-colors text-base font-medium block mb-1"
                      >
                        {item.info}
                      </a>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Schedule Call CTA */}
            <Card className="glass border-primary/20 bg-gradient-primary/5 hover-glow animate-fade-in delay-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl mb-2 gradient-text">
                  Prefer a Strategy Call?
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Schedule a 30-minute strategy session to discuss your project requirements and get expert recommendations.
                </p>
                <Button className="w-full hover-glow pulse-primary group">
                  Schedule Strategy Call
                  <Calendar className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="glass border-border/20 animate-fade-in delay-800">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 gradient-text">Why Choose ZyberStar?</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    24/7 communication and support
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Agile development methodology
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Transparent pricing and timelines
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Post-launch support included
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;