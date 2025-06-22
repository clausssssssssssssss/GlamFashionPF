// src/pages/ProductDetail.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";  // <- Context

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);      // <- Hook al contexto

  const [product, setProduct] = useState(null);
  const [error,   setError]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalles…</p>;
  if (error)   return <p className="text-red-600">Error: {error}</p>;

  const displayPrice = (product.price ?? 0).toFixed(2);

  const handleAdd = () => {
    addToCart({
      id:     product._id,
      name:   product.name,
      price:  product.price,
      image:  product.image,
      qty:    1
    });
    // opcional: ir al carrito o mostrar mensaje
    navigate("/Carritodecompras");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/Vestidos" className="text-sm text-blue-600 mb-4 inline-block">
        ← Regresar
      </Link>

      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-700 mb-4">${displayPrice}</p>
      <p className="mb-6">{product.description}</p>

      {/* BOTÓN AGREGAR AL CARRITO */}
      <button
        onClick={handleAdd}
        className="w-full bg-black text-white py-3 rounded-full text-lg hover:opacity-90 transition"
      >
        🛒 Agregar al carrito
      </button>
    </div>
  );
}
