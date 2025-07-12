import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Building2, Factory, Warehouse, HardHat, Truck, CheckCircle, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Flame className="h-12 w-12 text-primary" />,
      title: "Technical Support",
      description: "Full specialised technical product support field service on our Elgin tractors and Elgin flameproof systems fitted to OEM machinery and technical assistance where required.",
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Surveys",
      description: "We offer on-site flameproof system surveys.",
    },
    {
      icon: <Warehouse className="h-12 w-12 text-primary" />,
      title: "Parts",
      description: "We supply a range of parts for all our equipment.",
    },
    {
      icon: <HardHat className="h-12 w-12 text-primary" />,
      title: "Training",
      description: "We offer on-site Elgin supplied systems and Elgin tractor operator training.",
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Repairs",
      description: "We offer Elgin tractor major repairs and/or rebuilds according to the latest approved standards.",
    },
  ];

  const certifications = [
    { name: "SABS Approved", icon: <Shield className="h-6 w-6" /> },
    { name: "ISO Certified", icon: <Award className="h-6 w-6" /> },
    { name: "30+ Years Experience", icon: <CheckCircle className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Professional Flameproofing Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Comprehensive fire protection solutions for industrial, commercial, and residential applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    {cert.icon}
                    <span>{cert.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sales and Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elgin Flameproofing offers a number of services to new and existing clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Protect Your Property?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a comprehensive consultation and competitive quote
              tailored to your specific flameproofing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  Request Free Quote
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
