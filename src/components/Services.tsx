
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Building2, Factory, Warehouse, HardHat, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Structural Steel Treatment",
      description: "Comprehensive flameproofing for structural steel components, beams, and frameworks to meet safety regulations.",
      features: ["SABS 1186 compliant", "Interior & exterior applications", "Long-lasting protection"]
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Industrial Fabric Treatment",
      description: "Fire retardant treatment for curtains, drapes, and fabric installations in industrial settings.",
      features: ["Washable treatments", "Various fabric types", "Custom applications"]
    },
    {
      icon: <Warehouse className="h-8 w-8 text-primary" />,
      title: "Timber & Wood Treatment",
      description: "Professional flame retardant application for wooden structures, panels, and decorative elements.",
      features: ["Penetrating treatments", "Surface coatings", "Natural wood preservation"]
    },
    {
      icon: <HardHat className="h-8 w-8 text-primary" />,
      title: "Safety Consulting",
      description: "Expert advice on fire safety compliance and flameproofing requirements for your specific industry.",
      features: ["Compliance audits", "Safety planning", "Regulatory guidance"]
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "On-Site Services",
      description: "Mobile flameproofing services bringing professional treatment directly to your location.",
      features: ["Nationwide coverage", "Minimal disruption", "Flexible scheduling"]
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Fire Testing & Certification",
      description: "Comprehensive fire testing services and certification documentation for compliance requirements.",
      features: ["SABS testing", "Compliance certificates", "Quality assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Flameproofing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fire protection solutions for industrial, commercial, and residential applications. 
            All treatments are SABS approved and meet South African safety standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
