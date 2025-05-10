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
    ];

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {/* Regresar */}
      <div className="flex justify-end mb-4">
        <Link to="/inicio" className="text-sm text-black underline hover:text-gray-600">
          Regresar
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">GLAMFASHION</h1>
      <h2 className="text-lg tracking-widest mb-6 uppercase">Dresses</h2>

      <div className="flex flex-wrap gap-6">
        {productos.map((prod, i) => (
          <CardProducto
            key={i}
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
