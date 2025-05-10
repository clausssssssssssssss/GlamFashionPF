import React from "react";
import { Link } from "react-router-dom";
import CardProducto from "../components/Cards";

const Carritodecompras = () => {
  const carrito = [
    { titulo: "Vestido blanco", precio: 40, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Vestido beige", precio: 42, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Vestido negro", precio: 39, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Vestido marrón", precio: 45, imagen: "/images/imgProducto4.jpg" },
  ];

  const sugerencias = [
    { titulo: "Vestido largo rojo", precio: 50, imagen: "/images/imgProducto5.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {/* Botón Regresar */}
      <div className="flex justify-end mb-4">
        <Link to="/inicio" className="text-sm text-black underline hover:text-gray-600">
          Go back
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4 tracking-widest">SHOP CAR</h2>
      <div className="flex gap-6 flex-wrap mb-6">
        {carrito.map((item, index) => (
          <CardProducto key={index} {...item} />
        ))}
      </div>

      {/* Botón de pago */}
      <div className="text-center mb-10">
      <button><Link to="/MetododePago" className="border border-black py-1 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
          GO PAY
        </Link>
        </button>
      </div>

      {/* Más artículos */}
      <h3 className="text-xl font-bold mb-4 tracking-widest">MORE PRODUCTS      </h3>
      <div className="flex gap-6">
        {sugerencias.map((item, index) => (
          <CardProducto key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carritodecompras;
