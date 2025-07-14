import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import ProductAccordion from "@/components/ProductAccordion";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  details: {
    title: string;
    features: string[];
  }[];
  image: string;
  iframe: string;
  brochure: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <iframe src={product.iframe} width="600" height="400" />
      <a href={product.brochure} download>Download Brochure</a>
      {/* ProductAccordion is now used in the ProductDetails section, passing details directly */}
      <ProductAccordion details={product.details} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products: Product[] = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products: Product[] = JSON.parse(jsonData);

  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;