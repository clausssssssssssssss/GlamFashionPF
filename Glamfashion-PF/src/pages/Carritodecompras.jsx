// src/pages/Carritodecompras.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import CardProducto from "../components/Cards";

export default function Carritodecompras() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { products: allProducts, loading, error } = useFetchProducts();

  // Filtrar productos recomendados que no estén ya en el carrito
  const recommended = allProducts
    .filter((p) => !cartItems.some((item) => item.id === p._id))
    .slice(0, 4);

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-4">
          🛒 Tu Carrito
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600 text-center py-8">
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-gray-50 rounded-xl p-4 shadow-inner"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">Cantidad: {item.qty}</p>
                    <p className="text-gray-600">
                      Precio unitario: ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-800 font-medium">
                      Subtotal: ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                    aria-label="Eliminar del carrito"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <p className="text-xl font-bold text-gray-900">
                Total: ${total.toFixed(2)}
              </p>
              <Link
                to="/FormPayment"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
              >
                Proceder al Pago
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Sección de productos recomendados */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Más productos para ti
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Cargando productos…</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommended.map((prod) => (
              <Link
                key={prod._id}
                to={`/producto/${prod._id}`}
                className="block"
              >
                <CardProducto
                  titulo={prod.name}
                  precio={prod.price}
                  imagen={prod.image}
                  botonTexto="Ver más"
                />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Botón volver a catálogo */}
      <div className="max-w-5xl mx-auto text-center mt-8">
        <Link
          to="/inicio"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
        >
          ← Volver a los productos
        </Link>
      </div>
    </div>
  );
}
