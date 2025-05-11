import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Ajustá la ruta según tu estructura

const Clientes = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">
    

        {/* Encabezado */}
        <h1 className="text-2xl font-extrabold tracking-widest mb-4">GLAMFASHION</h1>
        <h2 className="text-lg font-semibold uppercase mb-6">Clients</h2>

        {/* Contenedor del formulario */}
        <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
          <h3 className="text-md font-bold uppercase mb-4 text-center">Customers</h3>

          {/* Campos */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 text-center">
            <button className="border py-2 rounded font-bold uppercase">Name</button>
            <button className="border py-2 rounded font-bold uppercase">Last Name</button>
            <button className="border py-2 rounded font-bold uppercase">Birthday</button>
            <button className="border py-2 rounded font-bold uppercase">E-mail</button>
            <button className="border py-2 rounded font-bold uppercase">Phone</button>
            <button className="border py-2 rounded font-bold uppercase">Password</button>
          </div>

          {/* Área vacía (simulando tabla o lista) */}
          <div className="bg-white border rounded h-40 mb-6"></div>

          {/* Botones */}
          <div className="flex justify-center gap-4">
            <button className="border px-6 py-2 rounded hover:bg-black hover:text-white transition">Add</button>
            <button className="border px-6 py-2 rounded hover:bg-black hover:text-white transition">Edit</button>
            <button className="border px-6 py-2 rounded hover:bg-black hover:text-white transition">Eliminate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
