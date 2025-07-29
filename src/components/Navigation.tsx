import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Information', href: '/information' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
            ZYBERSTAR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors animated-underline"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#') && window.location.pathname === '/') {
                      e.preventDefault();
                      const target = document.querySelector(item.href.substring(1));
                      target?.scrollIntoView({ behavior: 'smooth' });
                    } else if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = item.href;
                    }
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors animated-underline"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button 
              className="pulse-primary hover-glow"
              onClick={() => window.open('https://calendly.com/zyberstar/strategy-call', '_blank')}
            >
              Schedule Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.href.startsWith('/#') && window.location.pathname === '/') {
                        e.preventDefault();
                        const target = document.querySelector(item.href.substring(1));
                        target?.scrollIntoView({ behavior: 'smooth' });
                      } else if (window.location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = item.href;
                      }
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button 
                className="pulse-primary hover-glow w-fit"
                onClick={() => window.open('https://calendly.com/zyberstar/strategy-call', '_blank')}
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;