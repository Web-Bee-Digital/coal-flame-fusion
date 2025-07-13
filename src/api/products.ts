const productsFilePath = "/data/products.json"; // Should match public directory path

export const fetchProductBySlug = async (slug: string) => {
  try {
    const response = await fetch(productsFilePath);
    if (!response.ok) {
      throw new Error("Failed to fetch products file");
    }
    const products = await response.json();
    const product = products.find((p: any) => p.slug === slug);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    throw new Error("Failed to fetch product. Please try again later.");
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(productsFilePath);
    if (!response.ok) {
      throw new Error("Failed to fetch products file");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again later.");
  }
};
