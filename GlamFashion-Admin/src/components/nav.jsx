// src/components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-widest">GLAMFASHION</h1>
      <div className="space-x-4 text-sm">
        <Link to="/Inicio" className="hover:underline">Inicio</Link>
        <Link to="/LoginAdmin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
};

export default Nav;
