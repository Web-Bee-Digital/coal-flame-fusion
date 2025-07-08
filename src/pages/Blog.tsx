
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Flame, Shield, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Understanding SABS 1186: South Africa's Flameproofing Standards",
    excerpt: "A comprehensive guide to understanding South Africa's building standards for fire protection and how they apply to your flameproofing projects.",
    content: "SABS 1186 is the cornerstone of fire safety standards in South Africa...",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    category: "Regulations",
    author: "Technical Team",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Importance of Regular Fire Safety Inspections",
      excerpt: "Learn why regular inspections are crucial for maintaining fire protection systems and ensuring ongoing compliance.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      category: "Safety",
      author: "John Smith",
      date: "2024-01-10",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Choosing the Right Fire Retardant for Your Application",
      excerpt: "Different materials require different fire retardant treatments. Here's how to choose the right one for your project.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      category: "Technical",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Industrial Fire Safety: Best Practices for Manufacturing",
      excerpt: "Essential fire safety practices for manufacturing facilities to protect both personnel and equipment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      category: "Industrial",
      author: "Mike Wilson",
      date: "2023-12-28",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Heritage Building Fire Protection: Preserving History Safely",
      excerpt: "Special considerations and techniques for protecting historic buildings while maintaining their architectural integrity.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Heritage",
      author: "Linda Davis",
      date: "2023-12-20",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Cost-Effective Fire Protection Strategies for Small Businesses",
      excerpt: "Practical fire protection solutions that fit small business budgets without compromising on safety.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Business",
      author: "Tom Anderson",
      date: "2023-12-15",
      readTime: "4 min read"
    },
    {
      id: 7,
      title: "The Science Behind Intumescent Coatings",
      excerpt: "Understanding how intumescent fire protection coatings work and why they're so effective for steel structures.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Technical",
      author: "Dr. Robert Chen",
      date: "2023-12-10",
      readTime: "10 min read"
    }
  ];

  const categories = [
    { name: "All Posts", icon: <Flame className="h-4 w-4" />, count: blogPosts.length + 1 },
    { name: "Technical", icon: <Shield className="h-4 w-4" />, count: blogPosts.filter(p => p.category === "Technical").length },
    { name: "Safety", icon: <Building2 className="h-4 w-4" />, count: blogPosts.filter(p => p.category === "Safety").length },
    { name: "Industrial", icon: <Building2 className="h-4 w-4" />, count: blogPosts.filter(p => p.category === "Industrial").length },
    { name: "Regulations", icon: <Shield className="h-4 w-4" />, count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Fire Safety Insights
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Expert knowledge, industry updates, and practical guidance for fire protection professionals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(1, 4).map((category, index) => (
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

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden shadow-2xl max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-primary/10 text-primary">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest fire safety insights, technical guides, and industry updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest fire safety insights, 
              industry updates, and technical guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
