import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Proveedores = () => {
  const proveedores = [
    { name: "Ana López", country: "Colombia", company: "Moda Latina S.A." },
    { name: "Lucía Fernández", country: "México", company: "Estilo Femenino MX" },
    { name: "Valentina Rossi", country: "Italia", company: "Rosa Donna SRL" },
    { name: "Camila Silva", country: "Chile", company: "Vanguardia Textil" },
    { name: "Sofía Ortega", country: "España", company: "ChicMadrid Co." }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">
      

        {/* Encabezado */}
        <h1 className="text-2xl font-extrabold tracking-widest mb-4">GLAMFASHION</h1>
        <h2 className="text-lg font-semibold uppercase mb-6">Supliers</h2>

        {/* Panel principal */}
        <div className="bg-black p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Columna: Name */}
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="uppercase font-semibold text-center text-black mb-2">Name</h3>
              <ul className="text-black space-y-2">
                {proveedores.map((p, i) => (
                  <li key={i} className="border-b pb-1">{p.name}</li>
                ))}
              </ul>
            </div>

            {/* Columna: Country */}
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="uppercase font-semibold text-center text-black mb-2">Country</h3>
              <ul className="text-black space-y-2">
                {proveedores.map((p, i) => (
                  <li key={i} className="border-b pb-1">{p.country}</li>
                ))}
              </ul>
            </div>

            {/* Columna: Company */}
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="uppercase font-semibold text-center text-black mb-2">Company</h3>
              <ul className="text-black space-y-2">
                {proveedores.map((p, i) => (
                  <li key={i} className="border-b pb-1">{p.company}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
