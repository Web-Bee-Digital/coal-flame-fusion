import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>011 422 3832</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@elginflameproofing.co.za</span>
              </div>
            </div>
            <div className="hidden md:flex text-sm">
              Mon-Fri: 8:00 AM - 5:00 PM | Emergency Services Available 24/7
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">
                Elgin Flameproofing
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Gallery
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Blog
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Products
              </Link>
            </nav>

            {/* CTA Button */}
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Get Quote</Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
