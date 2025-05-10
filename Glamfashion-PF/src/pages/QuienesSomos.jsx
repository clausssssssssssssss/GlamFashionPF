import React from "react";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-6">
      {/* Sección izquierda: texto */}
      <div className="md:w-1/2 w-full p-6">
        <div className="mb-4">
          <Link to="/Inicio" className="text-sm text-black underline hover:text-gray-600">
            Regresar
          </Link>
        </div>

        <h2 className="text-center font-semibold tracking-widest mb-4 text-lg text-black">
          QUIENES SOMOS
        </h2>

        <p className="text-center text-3xl  text-black">
          GLAMFASHION es una tienda online femenina la cual busca crear una experiencia única
          a nuestras usuarias, brindando atención personalizada, ropa de la más alta calidad
          y sobre todo exclusividad. Nuestro objetivo es que nuestras usuarias tengan una
          experiencia online atractiva y eficaz en la compra de artículos.
        </p>
      </div>

      {/* Sección derecha: imagen */}
      <div className="md:w-1/2 w-full p-10 text-black">
        <img
          src="/images/Quienessomos.jpg"
          alt="Modelo Glamfashion"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default QuienesSomos;
