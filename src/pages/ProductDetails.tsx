import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "@/api/products";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Product {
  name: string;
  image: string;
  iframe?: string;
  content: string;
  description?: string;
  specs?: string[];
  details?: {
    title: string;
    features: string[];
  }[];
  brochure?: string;
  // ...add more fields if present in products.json...
}

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", slug],
    queryFn: () => slug ? fetchProductBySlug(slug) : Promise.reject("No slug"),
    enabled: !!slug
  });

  useEffect(() => {
    if (!product || !product.iframe) return;

    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      const iframe = document.getElementById("tour-embeded") as HTMLIFrameElement | null;
      if (iframe) {
        iframe.contentWindow?.postMessage(
          {
            type: "devicemotion",
            deviceMotionEvent: {
              acceleration: e.acceleration,
              accelerationIncludingGravity: e.accelerationIncludingGravity,
              rotationRate: e.rotationRate,
              interval: e.interval,
              timeStamp: e.timeStamp,
            },
          },
          "*"
        );
      }
    };

    window.addEventListener("devicemotion", handleDeviceMotion);
    return () => window.removeEventListener("devicemotion", handleDeviceMotion);
  }, [product]);

  if (!slug || isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Back to Products button as breadcrumb */}
          <div className="mb-6">
            <Link to="/products">
              <button
                className="bg-transparent border-none text-primary hover:underline px-0 py-0 shadow-none no-underline"
                style={{ background: "none", border: "none", textDecoration: "none" }}
                type="button"
              >
                &larr; Back to Products
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top">
            <div>
              <img
                src={product.image}
                alt="Product Preview"
                className={`cursor-pointer rounded-lg shadow-lg ${product.iframe ? "hover:opacity-90" : ""}`}
                onClick={() => product.iframe && setIsPopupOpen(true)}
              />
              {/* Toggle 360° View button */}
              {product.iframe && (
                <div className="mt-4">
                  <button
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors mb-2"
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                  >
                    {/* Eye icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    360° View
                  </button>
                </div>
              )}
              {/* Download Brochure button */}
              {product.brochure && (
                <div className={product.iframe ? "" : "mt-4"}>
                  <a
                    href={product.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                      type="button"
                    >
                      {/* Download icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                      </svg>
                      Download Brochure
                    </button>
                  </a>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              {product.description && (
                <p className="mb-4 text-gray-700">{product.description}</p>
              )}
              <div dangerouslySetInnerHTML={{ __html: product.content }} />
              {product.details && product.details.length > 0 && (
                <Accordion type="single" collapsible className="mt-6 space-y-6">
                  {product.details.map((detail, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger>{detail.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-gray-600">
                          {detail.features.map((feature, fidx) => (
                            <li key={fidx}>{feature}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
              {product.specs && product.specs.length > 0 && (
                <div className="mt-4">
                  <h2 className="font-semibold mb-1">Specifications:</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.specs.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Removed Back to Products button from here */}
            </div>
          </div>
          {product.iframe && isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: "80vw", height: "80vh" }}>
                <div className="relative h-full w-full">
                  <button
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                    style={{ border: 0 }}
                    onClick={() => setIsPopupOpen(false)}
                  >
                    X
                  </button>
                  <iframe
                    id="tour-embeded"
                    name={product.name}
                    src={product.iframe}
                    frameBorder="0"
                    allow="vr; xr; accelerometer; gyroscope; autoplay;"
                    allowFullScreen
                    loading="eager"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
