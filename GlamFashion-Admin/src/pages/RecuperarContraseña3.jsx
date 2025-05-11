import React from "react";
import { Link } from "react-router-dom";

const RecuperarContraseña3 = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Formulario (lado izquierdo) */}
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 sm:px-10 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black text-left">
            GLAMFASHION
          </h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700 text-left">
            Recover Password
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">New Password</label>
              <input
                type="password"
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">Confirm New Password</label>
              <input
                type="password"
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <Link to="/LoginAdmin">
              <button
                type="button"
                className="w-full bg-black text-white py-2 font-semibold uppercase rounded hover:bg-gray-900 transition-colors"
              >
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen lateral (derecha) */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src="/images/RecuperarContraseña.jpeg"
          alt="Modelo Glamfashion"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RecuperarContraseña3;
