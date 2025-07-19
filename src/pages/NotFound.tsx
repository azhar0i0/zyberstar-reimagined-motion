import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rounded-lg transform rotate-45" />
        <div className="floating absolute top-40 right-20 w-20 h-20 border-2 border-accent/20 rounded-full" />
        <div className="floating absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-lg transform rotate-12" />
        <div className="floating absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/10 rounded-full" />
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        <div className="glass rounded-2xl p-12 hover-glow">
          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4 animate-scale-in">
            404
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-4 animate-fade-in delay-200">
            Page Not Found
          </h1>
          
          {/* Description */}
          <p className="text-muted-foreground mb-8 text-lg animate-fade-in delay-300">
            Oops! The page you're looking for seems to have wandered off into cyberspace.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4 animate-fade-in delay-400">
            <Link to="/">
              <Button className="w-full pulse-primary hover-glow group text-lg py-6">
                <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Return to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full glass border-border/30 hover:border-primary/50 group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in delay-500">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;