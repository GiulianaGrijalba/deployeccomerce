"use client";

import { useParams } from "next/navigation";
import ProductDetailView from "@/views/ProductDetailView";
import { getProductsById } from "@/helpers/products.helper";
import { useEffect, useState } from "react";
import { IProduct } from "@/types";

const ProductDetailClient = () => {
  const { productID } = useParams(); // Obtiene el ID desde la URL
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (productID) {
      getProductsById(productID as string).then(setProduct).catch(console.error);
    }
  }, [productID]);

  if (!product) return <p>Cargando producto...</p>;

  return <ProductDetailView {...product} />;
};

export default ProductDetailClient;
