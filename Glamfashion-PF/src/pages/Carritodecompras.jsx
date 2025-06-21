// src/pages/Carritodecompras.jsx
import React, { useContext, useEffect, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const CartProducts = () => {
  const { products } = useFetchProducts();
  const [cart, setCart] = useState([]);
  const { user, API } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Cargo el carrito de localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemove = (idProduct) => {
    updateCart(cart.filter((item) => item.idProduct !== idProduct));
  };

  const handleQuantityChange = (idProduct, delta) => {
    const newCart = cart.map((item) => {
      if (item.idProduct === idProduct) {
        const qty = item.quantity + delta;
        if (qty < 1) return item;
        const prod = products.find((p) => p._id === idProduct);
        return {
          ...item,
          quantity: qty,
          subtotal: prod.price * qty,
        };
      }
      return item;
    });
    updateCart(newCart);
  };

  // Agrega nombre y precio a cada item
  const cartWithDetails = cart.map((ci) => {
    const prod = products.find((p) => p._id === ci.idProduct) || {};
    return {
      ...ci,
      name: prod.name || "Producto desconocido",
      price: prod.price || 0,
    };
  });

  const total = cartWithDetails.reduce((sum, i) => sum + i.subtotal, 0);

  // 1) Crea la orden en tu DB y devuelve el id
  const createOrder = async () => {
    const res = await fetch(`${API}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idClient: user,
        products: cart,
        total,
        status: "Pending",
      }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Error creando la orden");
    }
    const data = await res.json();
    return data._id; // asumo que Mongo te devuelve _id
  };

  // 2) Llama a tu endpoint Wompi y redirige al checkout
  const handleWompiPayment = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const orderId = await createOrder();

      const res = await fetch(`${API}/payments/wompi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          orderId,
          customerEmail: user.email, // o donde guardes el email
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error iniciando transacción Wompi");
      }

      const { checkoutUrl } = await res.json();
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return <p className="p-6 text-center">Tu carrito está vacío.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Vista previa del carrito</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Producto</th>
            <th className="text-right py-2">Precio</th>
            <th className="text-center py-2">Cantidad</th>
            <th className="text-right py-2">Subtotal</th>
            <th className="text-center py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartWithDetails.map((item) => (
            <tr key={item.idProduct} className="border-b">
              <td className="py-2">{item.name}</td>
              <td className="text-right py-2">${item.price.toFixed(2)}</td>
              <td className="text-center py-2">
                <button
                  onClick={() => handleQuantityChange(item.idProduct, -1)}
                  className="px-2 py-1 border rounded-l"
                >
                  –
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.idProduct, 1)}
                  className="px-2 py-1 border rounded-r"
                >
                  +
                </button>
              </td>
              <td className="text-right py-2">${item.subtotal.toFixed(2)}</td>
              <td className="text-center py-2">
                <button
                  onClick={() => handleRemove(item.idProduct)}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-bold py-2">
              Total:
            </td>
            <td className="text-right font-bold py-2">
              ${total.toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      {message && (
        <p
          className={`mt-4 font-semibold ${
            message.startsWith("Error") ? "text-red-600" : "text-green-600"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}

      <button
        onClick={handleWompiPayment}
        disabled={loading}
        className="mt-6 px-6 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Redirigiendo a Wompi..." : "Pagar con Wompi"}
      </button>
    </div>
  );
};

export default CartProducts;
