import Navigation from '@/components/Navigation';
import EnhancedAboutSection from '@/components/EnhancedAboutSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <EnhancedAboutSection />
      </div>
    </div>
  );
};

export default About;