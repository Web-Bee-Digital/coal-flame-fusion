import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Parts = () => {
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
                alt="Parts Preview"
                className="cursor-pointer rounded-lg shadow-lg"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>

            {/* Right: Content about parts */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                High-Quality Flameproofing Parts
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Explore our range of flameproofing parts designed to meet the highest safety standards.
                Our products are engineered for durability, reliability, and compliance with industry regulations.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Fire-resistant coatings and sprays</li>
                <li>Protective panels and barriers</li>
                <li>High-performance insulation materials</li>
                <li>Customizable solutions for unique requirements</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                    View Our Work
                  </Button>
                </Link>
              </div>
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

export default Parts;
