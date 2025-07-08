
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional <span className="text-primary">Flameproofing</span> Services
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
            Protecting your assets with certified fire retardant treatments. 
            Over 30 years of experience in industrial flameproofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900">
                View Our Services
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Certified Protection</h3>
              <p className="text-gray-300">SABS approved treatments and materials</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">30+ Years Experience</h3>
              <p className="text-gray-300">Trusted by major industrial clients</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-300">Quick turnaround times for all projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
