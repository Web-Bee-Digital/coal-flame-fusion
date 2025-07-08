
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us Today
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Ready to protect your property with professional flameproofing? Get your free consultation and quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>SABS Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Award className="h-5 w-5" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Request Your Free Quote</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and our experts will get back to you within 24 hours with a comprehensive quote.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" className="h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base font-medium">Company Name</Label>
                    <Input id="company" placeholder="Your company name (optional)" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base font-medium">Project Location *</Label>
                    <Input id="location" placeholder="City, Province" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-base font-medium">Service Required *</Label>
                    <select id="service" className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="structural-steel">Structural Steel Treatment</option>
                      <option value="fabric-treatment">Industrial Fabric Treatment</option>
                      <option value="timber-wood">Timber & Wood Treatment</option>
                      <option value="safety-consulting">Safety Consulting</option>
                      <option value="on-site-services">On-Site Services</option>
                      <option value="testing-certification">Fire Testing & Certification</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="not-sure">Not Sure - Need Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-base font-medium">Project Urgency</Label>
                    <select id="urgency" className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="standard">Standard (2-4 weeks)</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="emergency">Emergency (Within days)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your project including: 
• Type of building/structure
• Size/square footage
• Materials to be treated
• Timeline requirements
• Any specific compliance needs"
                      className="min-h-[150px] resize-y"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Send Quote Request
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your flameproofing needs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our expert team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-gray-600 text-lg">011 422 3832</p>
                      <p className="text-sm text-gray-500">Mon-Fri 8AM-5PM</p>
                      <p className="text-sm text-gray-500">Emergency line available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-gray-600">info@elginflameproofing.co.za</p>
                      <p className="text-sm text-gray-500">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Service Areas</h4>
                      <p className="text-gray-600">Johannesburg & Gauteng</p>
                      <p className="text-gray-600">Nationwide coverage available</p>
                      <p className="text-sm text-gray-500">Travel to remote locations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                      <p className="text-sm text-primary font-medium">Emergency services: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary text-xl mb-4">Why Choose Elgin Flameproofing?</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>30+ years of industry experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>SABS certified treatments and processes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>500+ successful projects completed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>24/7 emergency response available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Nationwide service coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-orange-800 text-xl mb-2">Emergency Services</h4>
                  <p className="text-orange-700 mb-4">
                    Need urgent flameproofing services? We offer 24/7 emergency response for critical projects and compliance deadlines.
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Call Emergency Line: 011 422 3832
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our flameproofing services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">How long does flameproofing last?</h4>
                  <p className="text-gray-600">Our SABS-certified treatments typically last 5-10 years depending on environmental conditions and application type. We provide maintenance schedules and re-certification services.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Do you provide certificates?</h4>
                  <p className="text-gray-600">Yes, we provide full SABS compliance certificates for all our work, including detailed documentation for regulatory and insurance purposes.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">How quickly can you start a project?</h4>
                  <p className="text-gray-600">Standard projects can typically begin within 2-4 weeks. For urgent projects, we offer expedited services and can often start within days.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Do you work nationwide?</h4>
                  <p className="text-gray-600">Yes, while based in Johannesburg, we provide services throughout South Africa. Travel and accommodation costs are included in project quotes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
