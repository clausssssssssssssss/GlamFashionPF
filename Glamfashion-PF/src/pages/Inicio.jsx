// src/pages/Inicio.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-red relative">
      {/* Header superior */}
      <div className="absolute top-6 right-10 z-20 flex gap-6 text-xs uppercase tracking-widest">
        <Link to="/Carritodecompras" className="hover:underline">
          SHOP CAR
        </Link>
        <Link to="/TerminosyCondiciones" className="hover:underline">
          TERMS & CONDITIONS
        </Link>
        <Link to="/Perfil" className="hover:underline">
          PROFILE
        </Link>
      </div>

      {/* Botón hamburguesa */}
      {!isOpen && (
        <div className="absolute top-6 left-6 z-30">
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white text-black shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <div className="p-6 flex-1">
          {/* Botón cerrar menú */}
          <div className="text-right mb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <h1 className="font-extrabold text-xl tracking-wide mb-4">GLAMFASHION</h1>
          <h3 className="text-xs font-semibold uppercase mb-2 tracking-widest">
            Products
          </h3>
          <ul className="space-y-2 text-sm font-medium tracking-widest uppercase">
            <li>
              <Link
                to="/Vestidos"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Dresses
              </Link>
            </li>
            <li>
              <Link
                to="/Skirts"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Skirts
              </Link>
            </li>
            <li>
              <Link
                to="/Tops"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Tops
              </Link>
            </li>
            <li>
              <Link
                to="/Pants"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Jeans
              </Link>
            </li>
            <li>
              <Link
                to="/Shirts"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                T-Shirts
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout abajo al pie del sidebar */}
        <div className="p-6 border-t">
          <Link
            to="/PrimeraVista"
            className="block text-sm uppercase font-semibold hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Imagen de fondo */}
      <div className="w-full h-screen overflow-hidden">
        <img
          src="/images/Inicio-pica.png"
          alt="GlamFashion Main"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Inicio;
