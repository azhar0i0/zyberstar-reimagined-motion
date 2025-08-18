import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
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

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 mb-12 border border-border/30">
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