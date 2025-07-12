import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  const product = {
    id,
    name: "Inyathi Tractor",
    description: "High-quality flameproof coating for industrial use.",
    features: ["Durable and reliable", "Complies with safety standards", "Easy to apply"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Static image with popup trigger */}
            <div>
              <img
                src="/parts-test.png"
                alt="Product Preview"
                className="cursor-pointer rounded-lg shadow-lg"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            {/* Right: Content about product */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to="/products">
                <Button className="bg-primary hover:bg-primary/90">Back to Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popup with iframe */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: "80vw", height: "80vh" }}>
            <div className="relative h-full">
              <button
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                onClick={() => setIsPopupOpen(false)}
              >
                ✕
              </button>
              <iframe
                id="tour-embeded"
                name="Elgin Tractor"
                src="https://tour.panoee.net/iframe/685965e46c3383e053e55af0"
                frameBorder="0"
                width="100%"
                height="100%"
                scrolling="no"
                allow="vr; xr; accelerometer; gyroscope; autoplay;"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
