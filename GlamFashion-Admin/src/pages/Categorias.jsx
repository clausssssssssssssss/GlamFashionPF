import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Asegúrate de tenerlo en la ruta correcta

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Datos de ejemplo
const dataMonth = [
  { name: "Ropa", sales: 400 },
  { name: "Zapatos", sales: 300 },
  { name: "Accesorios", sales: 200 },
];

const dataYear = [
  { name: "Ropa", sales: 1200 },
  { name: "Zapatos", sales: 800 },
  { name: "Accesorios", sales: 600 },
];

const Categorias = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">
      

        {/* Título */}
        <h1 className="text-2xl font-extrabold tracking-widest mb-4">GLAMFASHION</h1>
        <h2 className="text-lg font-semibold uppercase mb-6">Categories</h2>

        {/* Gráficas */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">
              Best Selling Categories Per Month
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataMonth}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">
              Best Selling Categories Per Year
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataYear}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
