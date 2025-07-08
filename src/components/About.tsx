
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Trophy } from "lucide-react";

const About = () => {
  const achievements = [
    "30+ years in flameproofing industry",
    "SABS approved treatments and processes",
    "Served 500+ commercial clients",
    "ISO certified quality management",
    "Nationwide service coverage",
    "24/7 emergency response available"
  ];

  const stats = [
    { icon: <Calendar className="h-8 w-8 text-blue-600" />, number: "30+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Projects Completed" },
    { icon: <Trophy className="h-8 w-8 text-blue-600" />, number: "100%", label: "SABS Compliant" },
    { icon: <CheckCircle className="h-8 w-8 text-blue-600" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800">About Elgin Flameproofing</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Three Decades of Fire Protection Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in the early 1990s, Elgin Flameproofing has been South Africa's trusted 
              partner for professional fire retardant treatments. We specialize in protecting structural 
              steel, timber, and fabric materials across industrial, commercial, and residential sectors.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to safety, quality, and compliance has made us the preferred choice for 
              major construction companies, manufacturers, and facility managers throughout the country. 
              Every treatment we apply meets or exceeds SABS standards and regulatory requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
