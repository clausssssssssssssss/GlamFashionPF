import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PerfilAdmin = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Imagen de perfil */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-300 mb-4"></div>
            <h2 className="text-xl font-bold">Claudia Ortega</h2>
          </div>

          {/* Detalles del perfil */}
          <div className="w-full max-w-xl space-y-4">
            <input
              type="text"
              disabled
              value="Claudia María"
              className="w-full border-b border-black p-2 bg-transparent"
            />
            <input
              type="text"
              disabled
              value="Hernández Ortega"
              className="w-full border-b border-black p-2 bg-transparent"
            />
            <input
              type="text"
              disabled
              value="30/10/2006"
              className="w-full border-b border-black p-2 bg-transparent"
            />
            <input
              type="email"
              disabled
              value="claudiamariahernandez@gmail.com"
              className="w-full border-b border-black p-2 bg-transparent"
            />
            <input
              type="tel"
              disabled
              value="123456789"
              className="w-full border-b border-black p-2 bg-transparent"
            />
            <input
              type="text"
              disabled
              value="San Salvador, El Salvador"
              className="w-full border-b border-black p-2 bg-transparent"
            />

            <Link to="/EditarPerfilAdmin">
              <button className="mt-6 border border-black px-6 py-2 font-semibold uppercase hover:bg-black hover:text-white transition">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilAdmin;
