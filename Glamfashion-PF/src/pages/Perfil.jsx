import React from "react";
import CardProducto from "../components/Cards";
import { Link } from "react-router-dom";

const Perfil = () => {
  const productosFavoritos = [
    { titulo: "Vestido aterciopelado", precio: 45, imagen: "/images/imgProducto1.jpg" },
    { titulo: "Conjunto denim", precio: 25, imagen: "/images/imgProducto2.jpg" },
    { titulo: "Chaqueta denim", precio: 30, imagen: "/images/imgProducto3.jpg" },
    { titulo: "Short denim", precio: 45, imagen: "/images/imgProducto4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Encabezado superior: Go back + Edit profile */}
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/inicio"
          className="text-sm underline text-black hover:text-gray-600 transition-colors"
        >
          Go back
        </Link>

        <Link to="/EditarPerfil">
          <button className="text-sm underline text-black hover:text-gray-600 transition-colors">
            EDIT PROFILE
          </button>
        </Link>
      </div>

      {/* Perfil */}
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 bg-gray-300 rounded-full mb-4" />
        <h2 className="text-sm text-black text-center mt-2 font-semibold">Claudia Ortega</h2>
      </div>

      {/* Favoritos */}
      <div className="mt-10">
        <h3 className="text-sm text-black text-center font-semibold text-lg mb-4 tracking-widest">
          MIS FAVORITOS
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          {productosFavoritos.map((producto, index) => (
            <CardProducto
              key={index}
              titulo={producto.titulo}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
