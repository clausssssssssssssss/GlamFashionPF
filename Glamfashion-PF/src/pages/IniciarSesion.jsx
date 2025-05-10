import React from "react";
import { Link } from "react-router-dom";

const IniciarSesion = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <img
          src="/images/IniciarSesion.jpg"
          alt="Modelo Glamfashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 md:p-20">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-4 tracking-widest text-center md:text-left">
            GLAMFASHION
          </h2>
          <h3 className="text-lg font-semibold mb-6 uppercase text-center md:text-left">
            LOGIN
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-sm uppercase">Email</label>
              <input
                type="email"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="ejemplo@email.com"
              />
            </div>
            <div>
              <label className="text-sm uppercase">Password</label>
              <input
                type="password"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="••••••••"
              />
            </div>
            <div className="text-right text-xs text-gray-500 cursor-pointer hover:underline">
              Forgot your password?
            </div>

            <Link to="/Inicio">
              <button
                type="button"
                className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full"
              >
                LOGIN
              </button>
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <Link to="/Crearcuenta" className="ml-2">
              <button className="border border-black py-1 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
