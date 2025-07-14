import React, { useState } from "react";

interface ProductDetail {
  title: string;
  features: string[];
}

interface ProductAccordionProps {
  details: ProductDetail[];
}

const ProductAccordion: React.FC<ProductAccordionProps> = ({ details }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {details.map((detail, idx) => (
        <div key={idx}>
          <button
            onClick={() => handleToggle(idx)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "0.5em",
              fontWeight: "bold",
              background: "#eee",
              border: "none",
              cursor: "pointer",
              marginBottom: "0.2em"
            }}
          >
            {detail.title}
          </button>
          {openIndex === idx && (
            <ul style={{ margin: 0, paddingLeft: "1.5em" }}>
              {detail.features.map((feature, fIdx) => (
                <li key={fIdx}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;