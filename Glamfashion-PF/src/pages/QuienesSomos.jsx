import React from "react";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white relative">
      {/* Regresar en la esquina superior izquierda */}
      <div className="absolute top-6 left-6">
        <Link
          to="/PrimeraVista"
          className="text-xs underline text-black hover:text-gray-600"
        >
          Regresar
        </Link>
      </div>

      {/* Columna izquierda: texto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 pt-20">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-black mb-4">
           ABOUT US
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-left space-y-2 mb-10">
            <strong>GLAMFASHION</strong> is an online women's store that seeks to create a unique experience for our users, providing personalized service, the highest quality clothing, and, above all, exclusivity.
            Our goal is for our users to have an engaging and effective online shopping experience..
          </p>
        </div>
      </div>

      {/* Columna derecha: imagen */}
      <div className="w-full md:w-1/2 h-screen">
        <img
          src="/images/Quienessomos.jpg"
          alt="Modelo Glamfashion"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default QuienesSomos;
