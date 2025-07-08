
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your property with professional flameproofing? Contact us for a comprehensive 
            consultation and competitive quote tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Input id="service" placeholder="e.g., Structural steel treatment, Fabric treatment" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your flameproofing requirements, project size, location, and timeline..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  Send Quote Request
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">011 422 3832</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-5PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@elginflameproofing.co.za</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Service Area</h4>
                    <p className="text-gray-600">Johannesburg & Surrounding Areas</p>
                    <p className="text-sm text-gray-500">Nationwide coverage available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-gray-500">Emergency services available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">Emergency Services</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Need urgent flameproofing services? We offer 24/7 emergency response for critical projects.
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
