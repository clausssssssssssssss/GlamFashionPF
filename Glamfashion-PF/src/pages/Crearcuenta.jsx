import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-black p-4">
      <div className="bg-white w-full max-w-5xl rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Formulario */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 tracking-widest">GLAMFASHION</h2>
          <h3 className="text-lg font-semibold mb-6 uppercase">Regístrate</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="NOMBRE"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="APELLIDO"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="date"
              placeholder="FECHA DE NACIMIENTO"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="CONTRASEÑA"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="DIRECCIÓN"
              className="w-full border-b border-gray-300 p-2 focus:outline-none"
            />

<Link to="/Inicio">
  <button
    type="button"
    className="w-full bg-black text-white py-2 font-semibold uppercase"
  >
   Crear cuenta
  </button>
</Link>

          </form>
        </div>

        {/* Imagen lateral */}
        <div className="md:w-1/2 w-full h-[550px]">
          <img
            src="/images/CrearCuenta.jpg"
            alt="Modelo Glamfashion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
