'use client'  
import { useAuth } from '@/context/AuthContext';
import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface CartProduct extends IProduct {
  quantity: number;
}

const ProductDetailView: React.FC<IProduct> = ({ id, name, description, stock, price, image }) => {
  const { userData } = useAuth();

  const handleAddToCart = () => {
    if (!userData) {
      toast.error("Necesitas estar logueado para agregar productos al carrito");
      return;
    }
    
    // recupero el carrito
    const cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      toast.error("Este producto ya está en el carrito");
      return;
    }

    cart.push({
      id,
      name,
      price,
      image,
      stock,
      description,
      quantity: 1 // 🔹 Agregado nuevamente
      ,
      categoryId: 0
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    
    toast.success(`Agregado al carrito: ${name}`);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="relative w-40 h-40 mb-4">
        <Image src={image} alt={name} className="rounded-md" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
      </div>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      <div className="flex justify-between w-full text-gray-700 text-sm">
        <span>Stock: <strong>{stock}</strong> unidades</span>
        <span>Precio: <strong className="text-green-600">${price}</strong></span>
      </div>

      <button onClick={handleAddToCart} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg shadow hover:bg-blue-700" disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetailView;





















// 'use client' 
// import { useAuth } from '@/context/AuthContext';
// import { IProduct } from '@/types';
// import Image from 'next/image';
// import React from 'react';
// import { toast } from 'react-hot-toast';

// const ProductDetailView: React.FC<IProduct> = ({ id, name, description, stock, price, image }) => {
//   const { userData } = useAuth();

//   const handleAddToCart = () => {
//     if (!userData) {
//       toast.error("Necesitas estar logueado para agregar productos al carrito");
//       return;
//     }
//     //recupero el carrito
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const existingProduct = cart.find((item: any) => item.id === id);
//     if (existingProduct) {
//       toast.error("Este producto ya está en el carrito");
//       return;
//     }

//     cart.push({
//       id, 
//       name, 
//       price,
//       image,
//       quantity: 1
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));
    
//     toast.success(`Agregado al carrito: ${name}`);
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
//       <div className="relative w-40 h-40 mb-4">
//       <Image src={image} alt={name} className="rounded-md" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }}/>
//       </div>
//       <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
//       <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
//       <div className="flex justify-between w-full text-gray-700 text-sm">
//         <span>Stock: <strong>{stock}</strong> unidades</span>
//         <span>Precio: <strong className="text-green-600">${price}</strong></span>
//       </div>

//       <button onClick={handleAddToCart} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg shadow hover:bg-blue-700" disabled={stock === 0}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default ProductDetailView;






















