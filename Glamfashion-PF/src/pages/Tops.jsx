import React from "react";
import CardProducto from "../components/Cards";
import { Link } from "react-router-dom";

const Productos = () => {
  const productos = [
    { titulo: "top negro", precio: 40, imagen: "/images/top1.jpeg" },
    { titulo: "top leopardo", precio: 42, imagen: "/images/top2.jpg" },
    { titulo: "top negro", precio: 39, imagen: "/images/top3.jpg" },
    { titulo: "top rojo", precio: 45, imagen: "/images/top4.jpg" },
    { titulo: "top rojo corto", precio: 38, imagen: "/images/top5.jpg" },
    { titulo: "top blanco", precio: 40, imagen: "/images/top6.jpg" },
    { titulo: "top beige", precio: 42, imagen: "/images/top7.jpg" },
    { titulo: "top negro", precio: 39, imagen: "/images/top8.jpg" },
    { titulo: "top marrón", precio: 45, imagen: "/images/top9.jpg" },
    { titulo: "top rojo corto", precio: 38, imagen: "/images/top10.jpg" },
   
  ];

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
          Tops Collection
        </h2>
      </div>

      {/* Grilla de tarjetas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map((prod, idx) => (
          <CardProducto
            key={idx}
            titulo={prod.titulo}
            precio={prod.precio}
            imagen={prod.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
