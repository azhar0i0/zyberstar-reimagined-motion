import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '/web-development' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'UI/UX Design', href: '/ui-ux-design' },
      { name: 'AI & Machine Learning', href: '/ai-machine-learning' },
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
      { name: 'Cloud & DevOps', href: '/cloud-devops' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Portfolio', href: '/portfolio' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@zyberstar.com', label: 'Email' }
  ];

  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm animated-underline"
                    >
                      {link.name}
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
    </footer>
  );
};

export default Footer;