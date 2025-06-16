import React from "react";
import CardProducto from "../components/Cards";
import { Link } from "react-router-dom";

const Productos = () => {
  const productos = [
    { titulo: "Vestido blanco", precio: 40, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Vestido beige", precio: 42, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Vestido negro", precio: 39, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Vestido marrón", precio: 45, imagen: "/images/imgProducto4.jpg" },
    { titulo: "Vestido rojo corto", precio: 38, imagen: "/images/imgProducto5.jpg" },
    { titulo: "Vestido blanco", precio: 40, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Vestido beige", precio: 42, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Vestido negro", precio: 39, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Vestido marrón", precio: 45, imagen: "/images/imgProducto4.jpg" },
    { titulo: "Vestido rojo corto", precio: 38, imagen: "/images/imgProducto5.jpg" },
    { titulo: "Vestido blanco", precio: 40, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Vestido beige", precio: 42, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Vestido negro", precio: 39, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Vestido marrón", precio: 45, imagen: "/images/imgProducto4.jpg" },
    { titulo: "Vestido rojo corto", precio: 38, imagen: "/images/imgProducto5.jpg" },
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
          Jeans Collection
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
