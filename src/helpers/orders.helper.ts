import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    toast.success("Compra realizada");
    return await response.json();
  } catch (error) {
    toast.error("No se pudo realizar la compra");
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error desconocido al crear la orden");
  }
}

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${API_URL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    toast.error("Ocurrió un error al obtener las órdenes");
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error desconocido al obtener las órdenes");
  }
}
