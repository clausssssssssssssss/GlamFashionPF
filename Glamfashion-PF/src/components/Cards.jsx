import React from "react";

const CardProducto = ({ imagen, titulo, precio }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="h-56 overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">${precio.toFixed(2)}</p>
        <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CardProducto;
