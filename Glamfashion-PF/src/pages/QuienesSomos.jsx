// src/pages/QuienesSomos.jsx
import React from "react";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 relative">
      {/* Botón Regresar */}
      <nav className="absolute top-6 left-6">
        <Link
          to="/PrimeraVista"
          className="text-xs uppercase tracking-wide hover:text-gray-700 transition"
        >
          ← Regresar
        </Link>
      </nav>

      {/* Contenedor principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold">Quiénes Somos</h1>
          <p className="text-lg leading-relaxed">
            En <strong>GlamFashion</strong> somos más que una tienda: somos tu aliado en la búsqueda
            de estilo y distinción. Ofrecemos prendas de la más alta calidad, servicio personalizado
            y una experiencia de compra inolvidable.
          </p>
        </div>
        {/* Imagen */}
        <div className="w-full md:w-1/2 h-80 overflow-hidden rounded-2xl">
          <img
            src="/images/Quienessomos.jpg"
            alt="Equipo GlamFashion"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Sección Misión / Visión / Valores */}
      <section className="max-w-5xl mx-auto mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
        <div className="bg-black text-white p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">Misión</h2>
          <p className="text-gray-200">
            Empoderar a cada mujer con prendas exclusivas que reflejen seguridad y estilo en cada
            ocasión.
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">Visión</h2>
          <p className="text-gray-200">
            Convertirnos en el referente de moda femenina en Latinoamérica, reconocidos por nuestra
            innovación y compromiso con la excelencia.
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">Valores</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Calidad</li>
            <li>Exclusividad</li>
            <li>Innovación</li>
            <li>Atención al cliente</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
