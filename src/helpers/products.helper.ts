import { IProduct } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 1200 }, // almacena durante 1200 segundos, mejora el rendimiento
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const products: IProduct[] = await response.json();
    return products;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error desconocido al obtener los productos");
  }
}

export async function getProductsById(id: string): Promise<IProduct> {
  try {
    const products: IProduct[] = await getProductsDB();
    const productFiltered = products.find((product) => product.id.toString() === id);

    if (!productFiltered) throw new Error("Product not found");
    return productFiltered;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error desconocido al obtener el producto");
  }
}











// import { IProduct } from "@/types";

// const API_URL= process.env.NEXT_PUBLIC_API_URL;

// export async function getProductsDB () {
//     try {
//         const response= await fetch(`${API_URL}/products`, {
//             next: {revalidate:1200} //almacena durante 1200segundos, mejora el rendimiento
//     })
//     const products: IProduct[]= await response.json ();
//     return products;
// } catch (error : any) {
//         throw new Error(error)
//     }
// }; 


// export async function getProductsById (id:string) {
//     try {
//        const products: IProduct[] = await getProductsDB();
//        const productFiltered = products.find((product) => product.id.toString() === id)
//        if (!productFiltered) throw new Error("Product not found")
//         return productFiltered
// } catch (error : any) {
//         throw new Error(error)
//     }
// }; 
