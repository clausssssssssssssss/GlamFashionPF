import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const EditarPerfilAdmin = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">
        {/* Botón volver */}
        <div className="mb-6">
          <Link to="/PerfilAdmin">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              ← Back to Profile
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Imagen de perfil */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-300 mb-4"></div>
            <h2 className="text-xl font-bold">Claudia Ortega</h2>
          </div>

          {/* Formulario de edición */}
          <div className="w-full max-w-xl space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border-b border-black p-2"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="w-full border-b border-black p-2"
            />
            <input
              type="date"
              className="w-full border-b border-black p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-black p-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border-b border-black p-2"
            />
            <input
              type="text"
              placeholder="Dirección"
              className="w-full border-b border-black p-2"
            />

            <button className="w-full bg-black text-white py-2 font-semibold uppercase rounded hover:bg-gray-800 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilAdmin;
