
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, you'd fetch the post data based on the ID
  const post = {
    id: 1,
    title: "Understanding SABS 1186: South Africa's Flameproofing Standards",
    excerpt: "A comprehensive guide to understanding South Africa's building standards for fire protection and how they apply to your flameproofing projects.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
    category: "Regulations",
    author: "Technical Team",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
      <h2>Introduction to SABS 1186</h2>
      <p>The South African Bureau of Standards (SABS) 1186 standard is fundamental to fire safety in South Africa. This comprehensive standard outlines the requirements for fire-resistant materials and treatments used in construction and industrial applications.</p>
      
      <h2>Key Requirements</h2>
      <p>SABS 1186 specifies several critical requirements that all flameproofing treatments must meet:</p>
      <ul>
        <li>Fire resistance duration standards</li>
        <li>Temperature thresholds for different applications</li>
        <li>Testing procedures and certification requirements</li>
        <li>Quality control measures during application</li>
      </ul>
      
      <h2>Application in Different Sectors</h2>
      <p>The standard applies differently across various sectors:</p>
      
      <h3>Industrial Applications</h3>
      <p>In industrial settings, SABS 1186 requires higher fire resistance ratings due to increased risk factors. Manufacturing facilities, warehouses, and processing plants must meet stringent requirements for structural steel protection.</p>
      
      <h3>Commercial Buildings</h3>
      <p>Commercial properties have specific requirements based on occupancy levels and building height. Multi-story buildings require enhanced fire protection measures for escape routes and structural elements.</p>
      
      <h3>Residential Complexes</h3>
      <p>While residential requirements may be less stringent, compliance is still mandatory for common areas, escape routes, and structural elements in multi-unit developments.</p>
      
      <h2>Compliance and Certification</h2>
      <p>Achieving SABS 1186 compliance involves several steps:</p>
      <ol>
        <li>Initial assessment of fire protection needs</li>
        <li>Selection of appropriate fire-resistant treatments</li>
        <li>Professional application by certified contractors</li>
        <li>Testing and verification of applied treatments</li>
        <li>Ongoing maintenance and periodic re-certification</li>
      </ol>
      
      <h2>Working with Certified Professionals</h2>
      <p>It's crucial to work with SABS-certified professionals who understand the intricacies of the standard. At Elgin Flameproofing, our team has over 30 years of experience ensuring compliance with SABS 1186 across all project types.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding and complying with SABS 1186 is not just a legal requirement—it's essential for protecting lives and property. The standard continues to evolve with advances in fire protection technology, and staying current with these changes is vital for maintaining effective fire safety measures.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Importance of Regular Fire Safety Inspections",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
      category: "Safety"
    },
    {
      id: 3,
      title: "Choosing the Right Fire Retardant for Your Application",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Technical"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-primary/10 text-primary">
                  {post.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Professional Fire Protection Services?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our SABS-certified team is ready to help you achieve compliance and protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="border-primary/30 text-primary mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {relatedPost.title}
                    </h3>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button variant="ghost" className="p-0 text-primary hover:text-primary/80">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
