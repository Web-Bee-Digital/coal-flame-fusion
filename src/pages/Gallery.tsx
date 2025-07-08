
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, Warehouse, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Industrial Warehouse Steel Treatment",
      category: "Structural Steel",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Complete structural steel flameproofing for a 50,000 sq ft industrial warehouse facility.",
      location: "Johannesburg, GP",
      year: "2024"
    },
    {
      id: 2,
      title: "Commercial Office Building",
      category: "Mixed Application",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Comprehensive fire protection including steel beams, timber panels, and fabric treatments.",
      location: "Cape Town, WC",
      year: "2024"
    },
    {
      id: 3,
      title: "Manufacturing Plant Upgrade",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      description: "Large-scale flameproofing project for automotive manufacturing facility.",
      location: "Durban, KZN",
      year: "2023"
    },
    {
      id: 4,
      title: "Theater Curtain Treatment",
      category: "Fabric Treatment",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Professional fabric flameproofing for main stage curtains and drapes.",
      location: "Pretoria, GP",
      year: "2023"
    },
    {
      id: 5,
      title: "Residential Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Fire protection treatments for luxury residential development common areas.",
      location: "Sandton, GP",
      year: "2023"
    },
    {
      id: 6,
      title: "Heritage Building Restoration",
      category: "Timber Treatment",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Careful flameproofing of historic timber structures while preserving architectural integrity.",
      location: "Cape Town, WC",
      year: "2022"
    },
    {
      id: 7,
      title: "Shopping Mall Steel Framework",
      category: "Structural Steel",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      description: "Extensive structural steel treatment for new shopping center construction.",
      location: "Bloemfontein, FS",
      year: "2022"
    },
    {
      id: 8,
      title: "Chemical Processing Plant",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      description: "Specialized fire protection for high-risk chemical processing environment.",
      location: "Secunda, MP",
      year: "2022"
    },
    {
      id: 9,
      title: "University Campus Buildings",
      category: "Educational",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      description: "Campus-wide fire protection upgrade including multiple building types.",
      location: "Stellenbosch, WC",
      year: "2021"
    }
  ];

  const categories = [
    { name: "All Projects", icon: <Building2 className="h-4 w-4" />, count: projects.length },
    { name: "Structural Steel", icon: <Building2 className="h-4 w-4" />, count: projects.filter(p => p.category.includes("Steel")).length },
    { name: "Industrial", icon: <Factory className="h-4 w-4" />, count: projects.filter(p => p.category === "Industrial").length },
    { name: "Fabric Treatment", icon: <Warehouse className="h-4 w-4" />, count: projects.filter(p => p.category.includes("Fabric")).length },
    { name: "Timber Treatment", icon: <HardHat className="h-4 w-4" />, count: projects.filter(p => p.category.includes("Timber")).length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Showcasing three decades of professional flameproofing excellence across South Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(1).map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                    <span>({category.count})</span>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From industrial warehouses to heritage buildings, see how we've protected 
              properties across diverse sectors with our professional flameproofing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.location}</span>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Similar Project Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">SABS Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you protect your property with the same professional standards 
              and attention to detail shown in our featured projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  Request Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                  View Our Services
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

export default Gallery;
