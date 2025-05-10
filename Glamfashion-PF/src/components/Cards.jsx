//CardProducto.jsx
import React from "react";

const CardProducto = ({ titulo, precio, imagen }) => {
  return (
    <div className="w-[140px] text-center">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-[180px] object-cover mb-2 shadow-md"
      />
      <h4 className="text-sm text-black text-center mt-2 font-semibold">{titulo}</h4>
      <p className="text-sm text-black text-center mt-2 font-semibold">${precio}</p>
    </div>
  );
};

export default CardProducto;
