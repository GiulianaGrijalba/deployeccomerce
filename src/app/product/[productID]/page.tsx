import { getProductsById } from '@/helpers/products.helper'
import ProductDetailView from '@/views/ProductDetailView'
import React from 'react'


const ProductDetail:React.FC<{params: {productID: string}}> = async ({params}) => { 
//es async porque tiene que obtener datos antes de renderizar
  const {productID} = params
  const product = await getProductsById(productID)
  // console.log(product)
  return (
    <ProductDetailView {...product}/> //componente, va a mostrar el detalle del producto
  )
}

export default ProductDetail








//product detail como server component
