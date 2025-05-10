import React from "react";
import { Link } from "react-router-dom";

const PrimeraVista = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      {/* Header - Navegación Responsive */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-2 sm:gap-0">
        <div className="text-4xl font-bold tracking-wide text-center sm:text-left">GLAMFASHION</div>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-base font-semibold uppercase tracking-widest text-center">
          <Link to="/Terminosycondiciones" className="hover:underline">Terms and Conditions</Link>
          <Link to="/Quienessomos" className="hover:underline">About Us</Link>
          <Link to="/IniciarSesion" className="hover:underline">Login</Link>
        </nav>
      </header>

      {/* Imagen collage responsive */}
      <main className="flex-1 w-full">
        <img
          src="/images/PrimerVistaCollage.png"
          alt="Collage GlamFashion"
          className="w-full h-auto max-w-screen object-contain"
        />
      </main>
    </div>
  );
};

export default PrimeraVista;
