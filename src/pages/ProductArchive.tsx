import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/products";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  image: string;
  slug: string;
  description?: string;
  // ...add more fields if present in products.json...
}

const ProductArchivePage = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of products. Click on any product to view more details and discover what makes each one unique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.slug} className="bg-white rounded-lg shadow-lg p-4">
                <img src={product.image} alt={product.name} className="rounded mb-4" />
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                {product.description && (
                  <p className="mb-2 text-gray-700">{product.description}</p>
                )}
                <Link to={`/products/${product.slug}`}>
                  <Button className="bg-primary hover:bg-primary/90">View Details</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductArchivePage;
