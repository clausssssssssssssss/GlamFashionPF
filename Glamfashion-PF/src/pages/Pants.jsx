// src/pages/Pants.jsx
import React from "react";
import { Link } from "react-router-dom";
import CardProducto from "../components/Cards";
import useFetchProducts from "../hooks/useFetchProducts";

export default function Pants() {
  const { products, loading, error } = useFetchProducts();

  // Filtramos solo la categoría "Pants"
  const pantsCollection = products.filter((p) => p.category === "Pants");

  if (loading) return <p className="text-center py-8">Cargando pantalones…</p>;
  if (error)   return <p className="text-center py-8 text-red-600">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Enlace de regreso */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-end">
        <Link
          to="/inicio"
          className="text-sm text-gray-700 hover:text-gray-900 underline"
        >
          ← Regresar
        </Link>
      </div>

      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">GLAMFASHION</h1>
        <h2 className="text-lg uppercase tracking-wider text-gray-600">
          Jeans Collection
        </h2>
      </div>

      {/* Grilla de tarjetas con Link a detalle */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pantsCollection.map((prod) => (
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
    </div>
  );
}
