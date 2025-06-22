// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Ítems del menú: mantenemos mismos paths
const menuItems = [
  { id: "/FormPayment",     label: "Pago Real",     icon: "💳" },
  { id: "/FormPaymentFake", label: "Pago Simulado", icon: "🧪" },
];

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((o) => !o);
  const active = location.pathname;

  return (
    <nav className="bg-red-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Aquí quitamos el título */}
        <div />
        {/* Menú desktop */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={
                active === item.id
                  ? "bg-red-700 px-3 py-2 rounded-md font-semibold"
                  : "hover:bg-red-800 px-3 py-2 rounded-md"
              }
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
        {/* Toggle mobile */}
        <button
          onClick={toggle}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-red-800">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setIsOpen(false)}
              className={
                active === item.id
                  ? "block px-4 py-2 bg-red-700 font-semibold"
                  : "block px-4 py-2 hover:bg-red-900"
              }
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
);
}
