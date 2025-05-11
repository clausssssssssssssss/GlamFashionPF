import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className={`bg-white h-screen shadow-md ${open ? "w-64" : "w-16"} transition-all duration-300 fixed z-10`}>
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-extrabold tracking-widest">{open && "GLAMFASHION"}</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          <FiMenu />
        </button>
      </div>

      <nav className="mt-6 space-y-4 px-4 text-sm font-semibold uppercase">
      <Link to="/Dashboard" className="flex items-center gap-3 hover:text-pink-600 transition">
          {open && "Inicio"}
        </Link>
        <Link to="/Productos" className="flex items-center gap-3 hover:text-pink-600 transition">
           {open && "Agregar Productos"}
        </Link>
        <Link to="/GraficosProductos" className="flex items-center gap-3 hover:text-pink-600 transition">
           {open && "Products"}
        </Link>
        <Link to="/Categorias" className="flex items-center gap-3 hover:text-pink-600 transition">
           {open && "Categories"}
        </Link>
         <Link to="/Clientes" className="flex items-center gap-3 hover:text-pink-600 transition">
           {open && "Customers"}
        </Link>
        <Link to="/Proveedores" className="flex items-center gap-3 hover:text-pink-600 transition">
          {open && "Suppliers"}
        </Link>
        <Link to="/Administradores" className="flex items-center gap-3 hover:text-pink-600 transition">
          {open && "Administrators"}
        </Link>
        <Link to="/PerfilAdmin" className="flex items-center gap-3 hover:text-pink-600 transition">
           {open && "Perfil"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
