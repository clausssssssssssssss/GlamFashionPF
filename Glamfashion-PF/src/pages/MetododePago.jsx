import React from "react";
import CardProducto from "../components/Cards";
import { Link } from "react-router-dom";

const MetodoDePago = () => {
  const productos = [
    { titulo: "Vestido blanco", precio: 40, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Vestido beige", precio: 42, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Vestido negro", precio: 39, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Vestido marrón", precio: 45, imagen: "/images/imgProducto4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 tracking-widest text-black">SHOP CAR</h2>

      {/* Productos */}
      <div className="flex gap-6 flex-wrap mb-10">
        {productos.map((item, index) => (
          <CardProducto key={index} {...item} />
        ))}
      </div>

      {/* Info y pago */}
      <div className="flex flex-col md:flex-row justify-between gap-8 text-black">
        {/* Detalles */}
        <div className="space-y-4 w-full md:w-1/2">
          <h3 className="text-lg font-bold tracking-widest">DETAILS</h3>
          <p>Total: <strong>$189.99</strong></p>
          <p>Dirección de envío: <strong>Ricaldone</strong></p>
          <p>Phone: <strong>82838389</strong></p>

          <button className="bg-black text-white px-8 py-2 rounded-full uppercase font-semibold">
            Pagar
          </button>
        </div>

        {/* Método de pago */}
        <div className="space-y-4 w-full md:w-1/2">
          <h3 className="text-lg font-bold tracking-widest">MIS MÉTODOS DE PAGO</h3>
          <div className="bg-gray-100 p-4 rounded-md shadow-sm text-sm">
            <p className="text-base">1123 4567 7880 8900</p>
            <p>Claudia María Ortega</p>
            <p className="text-xs text-gray-500">Since: 12/24 &nbsp; Due: 08/29</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodoDePago;
