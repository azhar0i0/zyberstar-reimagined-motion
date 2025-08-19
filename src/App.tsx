import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalTransformation from "./pages/DigitalTransformation";
import UIUXDesign from "./pages/UIUXDesign";
import AIMachineLearning from "./pages/AIMachineLearning";
import BlockchainSolutions from "./pages/BlockchainSolutions";
import CloudDevOps from "./pages/CloudDevOps";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/blockchain-solutions" element={<BlockchainSolutions />} />
          <Route path="/cloud-devops" element={<CloudDevOps />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
