import ProductDetailClient from "@/components/ProductDetailClient";

const ProductDetail = () => {
  return <ProductDetailClient />;
};

export default ProductDetail;







// import { getProductsById } from '@/helpers/products.helper'
// import ProductDetailView from '@/views/ProductDetailView'
// import { useParams } from 'next/navigation' // ✅ Importa useParams

// const ProductDetail = async () => { 
//   const params = useParams() // ✅ Obtiene parámetros correctamente
//   const productID = params.productID as string // ⚠️ Asegura que es string

//   const product = await getProductsById(productID)

//   return <ProductDetailView {...product} />
// }

// export default ProductDetail











// 'use client'
// import { getProductsById } from '@/helpers/products.helper'
// import ProductDetailView from '@/views/ProductDetailView'
// import { useParams } from 'next/navigation' // ✅ Importa useParams

// const ProductDetail = async () => { 
//   const params = useParams() // ✅ Obtiene parámetros correctamente
//   const productID = params.productID as string // ⚠️ Asegura que es string

//   const product = await getProductsById(productID)

//   return <ProductDetailView {...product} />
// }

// export default ProductDetail









//product detail como server component
