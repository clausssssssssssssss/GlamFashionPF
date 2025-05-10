import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header superior */}
      <div className="absolute top-6 right-10 z-10 flex gap-6 text-xs uppercase tracking-widest">
        <Link to="/Carritodecompras" className="hover:underline">
          Shop Car
        </Link>
        <Link to="/TerminosyCondiciones" className="hover:underline">
          Terminos y Condiciones
        </Link>
        <Link to="/QuienesSomos" className="hover:underline">
          Sobre Nosotros
        </Link>
        <Link to="/Perfil" className="hover:underline">
          Profile
        </Link>
        <Link to="/PrimeraVista" className="hover:underline">
          Inicio
        </Link>
      </div>

      {/* Menú lateral */}
      <div className="absolute top-6 left-6 z-10">
        <div className="text-3xl font-bold cursor-pointer mb-4">☰</div>
        <div className="bg-white text-black p-6 w-48 shadow-md">
          <h2 className="font-bold text-xl tracking-wide mb-4">GLAMFASHION</h2>
          <h3 className="text-xs font-semibold uppercase mb-2 tracking-widest">
            Categories
          </h3>
          <ul className="space-y-1 text-sm font-medium tracking-widest">
            <li><Link to="/
            Productos" className="hover:underline">Dresses</Link></li>
          </ul>
        </div>
      </div>

      {/* Imagen de fondo */}
      <div className="w-full h-screen overflow-hidden">
        <img
          src="/images/Inicio.jpg"
          alt="GlamFashion Main"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Inicio;
