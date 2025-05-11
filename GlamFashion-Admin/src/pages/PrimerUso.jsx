import React from "react";
import { Link } from "react-router-dom";

const PrimerUso = () => {
    console.log("Renderizando PrimerUso");
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <img
          src="/images/Primeruso-pica.png" 
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
            FIRST USE
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-sm uppercase">First Name</label>
              <input
                type="text"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="e.g. Claudia"
              />
            </div>
            <div>
              <label className="text-sm uppercase">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="e.g. Hernández"
              />
            </div>
            <div>
              <label className="text-sm uppercase">Email</label>
              <input
                type="email"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="text-sm uppercase">Phone Number</label>
              <input
                type="tel"
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="+503 7000 0000"
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

            <Link to="/Dashboard">
              <button
                type="button"
                className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full"
              >
                REGISTER
              </button>
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <Link to="/LoginAdmin" className="ml-2">
              <button className="border border-black py-1 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimerUso;
