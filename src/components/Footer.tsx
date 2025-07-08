
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Elgin Flameproofing</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              South Africa's trusted flameproofing specialists with over 30 years of experience 
              in fire protection solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">011 422 3832</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@elginflameproofing.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Structural Steel Treatment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industrial Fabric Treatment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Timber & Wood Treatment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Safety Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">On-Site Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fire Testing & Certification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hospitality</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Retail</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-300">
              <li>SABS 1186 Approved</li>
              <li>ISO Quality Certified</li>
              <li>Industry Compliance</li>
              <li>Safety Standards</li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 1:00 PM</p>
                <p>Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Elgin Flameproofing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Safety Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
