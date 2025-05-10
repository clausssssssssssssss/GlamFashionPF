import React, { useState } from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header superior */}
      <div className="absolute top-6 right-10 z-20 flex gap-6 text-xs uppercase tracking-widest">
        <Link to="/Carritodecompras" className="hover:underline">Shop Car</Link>
        <Link to="/TerminosyCondiciones" className="hover:underline">Términos y Condiciones</Link>
        <Link to="/QuienesSomos" className="hover:underline">Sobre Nosotros</Link>
        <Link to="/Perfil" className="hover:underline">Profile</Link>
        <Link to="/PrimeraVista" className="hover:underline">Inicio</Link>
      </div>

      {/* Icono ☰ oculto cuando menú está abierto */}
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

      {/* Menú lateral tipo sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white text-black shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Botón cerrar menú */}
          <div className="text-right mb-4">
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold">
              ✕
            </button>
          </div>

          <h2 className="font-bold text-xl tracking-wide mb-4">GLAMFASHION</h2>
          <h3 className="text-xs font-semibold uppercase mb-2 tracking-widest">Products</h3>
          <ul className="space-y-2 text-sm font-medium tracking-widest uppercase">
            <li><Link to="/Vestidos" className="hover:underline" onClick={() => setIsOpen(false)}>Dresses</Link></li>
            <li><Link to="/productos/skirts" className="hover:underline" onClick={() => setIsOpen(false)}>Skirts</Link></li>
            <li><Link to="/productos/tops" className="hover:underline" onClick={() => setIsOpen(false)}>Tops</Link></li>
            <li><Link to="/productos/jeans" className="hover:underline" onClick={() => setIsOpen(false)}>Jeans</Link></li>
            <li><Link to="/productos/tshirts" className="hover:underline" onClick={() => setIsOpen(false)}>T Shirts</Link></li>
          </ul>
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
