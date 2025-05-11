import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Datos de ejemplo
const monthlyData = [
  { name: "Enero", sales: 300 },
  { name: "Febrero", sales: 400 },
  { name: "Marzo", sales: 350 },
];

const yearlyData = [
  { name: "2021", sales: 1200 },
  { name: "2022", sales: 1600 },
  { name: "2023", sales: 1900 },
];

const soldOutData = [
  { name: "Zapatos", value: 40 },
  { name: "Blusas", value: 30 },
  { name: "Pantalones", value: 20 },
];

const departmentData = [
  { name: "Casual", value: 60 },
  { name: "Formal", value: 25 },
  { name: "Deportivo", value: 15 },
];

const COLORS = ["#000000", "#888888", "#CCCCCC"];

const Productos = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300 p-4 md:p-8 bg-white min-h-screen`}>
        <h2 className="text-3xl font-extrabold tracking-widest mb-6">PRODUCTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Productos por mes */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">Best Selling Products Per Month</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Productos por año */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">Best Selling Products Per Year</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={yearlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Productos agotados */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">Sold Out Products</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={soldOutData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {soldOutData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Por departamento */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-sm font-bold uppercase mb-2 text-center">Best Selling Products by Department</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {departmentData.map((_, index) => (
                    <Cell key={`cell-dep-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
