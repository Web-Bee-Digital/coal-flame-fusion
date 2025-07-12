import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Products = () => {
  const product = {
    id: 1,
    name: "Flameproof Coating",
    description: "High-quality flameproof coating for industrial use.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Product</h1>
            <p className="text-lg text-gray-600">
              Explore our flameproofing product designed to meet the highest safety standards.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <Link to={`/products/${product.id}`}>
              <Button className="bg-primary hover:bg-primary/90">View Details</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
