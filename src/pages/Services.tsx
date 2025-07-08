
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
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Structural Steel Treatment",
      description: "Comprehensive flameproofing for structural steel components, beams, and frameworks to meet safety regulations.",
      features: ["SABS 1186 compliant", "Interior & exterior applications", "Long-lasting protection", "Corrosion resistance"],
      details: "Our structural steel flameproofing service uses advanced intumescent coatings that expand when heated, forming an insulating char layer that protects the steel substrate. We work with industrial facilities, commercial buildings, and residential complexes.",
      applications: ["Industrial warehouses", "Commercial buildings", "Residential complexes", "Infrastructure projects"]
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Industrial Fabric Treatment",
      description: "Fire retardant treatment for curtains, drapes, and fabric installations in industrial settings.",
      features: ["Washable treatments", "Various fabric types", "Custom applications", "Durable protection"],
      details: "We provide comprehensive fabric flameproofing services for theaters, hotels, offices, and industrial facilities. Our treatments maintain the fabric's appearance while providing essential fire protection.",
      applications: ["Theater curtains", "Hotel drapes", "Office partitions", "Industrial covers"]
    },
    {
      icon: <Warehouse className="h-12 w-12 text-primary" />,
      title: "Timber & Wood Treatment",
      description: "Professional flame retardant application for wooden structures, panels, and decorative elements.",
      features: ["Penetrating treatments", "Surface coatings", "Natural wood preservation", "UV protection"],
      details: "Our timber flameproofing solutions protect wooden structures while maintaining their natural appearance. We use both penetrating and surface treatments depending on the application requirements.",
      applications: ["Structural timber", "Decorative panels", "Outdoor structures", "Architectural features"]
    },
    {
      icon: <HardHat className="h-12 w-12 text-primary" />,
      title: "Safety Consulting",
      description: "Expert advice on fire safety compliance and flameproofing requirements for your specific industry.",
      features: ["Compliance audits", "Safety planning", "Regulatory guidance", "Risk assessment"],
      details: "Our experienced consultants help businesses navigate complex fire safety regulations and develop comprehensive protection strategies tailored to their specific needs and industry requirements.",
      applications: ["Compliance audits", "Safety assessments", "Regulatory consultation", "Training programs"]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "On-Site Services",
      description: "Mobile flameproofing services bringing professional treatment directly to your location.",
      features: ["Nationwide coverage", "Minimal disruption", "Flexible scheduling", "Professional equipment"],
      details: "Our mobile service teams bring all necessary equipment and expertise directly to your site, minimizing disruption to your operations while ensuring professional application of fire protection treatments.",
      applications: ["Remote locations", "Large installations", "Operational facilities", "Emergency services"]
    },
    {
      icon: <Flame className="h-12 w-12 text-primary" />,
      title: "Fire Testing & Certification",
      description: "Comprehensive fire testing services and certification documentation for compliance requirements.",
      features: ["SABS testing", "Compliance certificates", "Quality assurance", "Documentation"],
      details: "We provide complete fire testing and certification services to ensure your flameproofing treatments meet all regulatory requirements and industry standards.",
      applications: ["Compliance certification", "Quality verification", "Regulatory documentation", "Performance testing"]
    }
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
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive flameproofing solutions across multiple industries, 
              all backed by SABS certification and decades of experience.
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
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.details}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Quote for {service.title}
                    </Button>
                  </Link>
                </CardContent>
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
