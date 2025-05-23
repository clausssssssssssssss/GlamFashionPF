import React, { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
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

// Datos simulados
const salesData = [
  { year: "2020", sales: 2400 },
  { year: "2021", sales: 3000 },
  { year: "2022", sales: 4000 },
  { year: "2023", sales: 4780 },
];

const departmentData = [
  { name: "Clothing", value: 400 },
  { name: "Shoes", value: 300 },
  { name: "Accessories", value: 300 },
];

const platformData = [
  { platform: "Web", value: 500 },
  { platform: "Instagram", value: 300 },
  { platform: "WhatsApp", value: 200 },
];

const COLORS = ["#000000", "#888888", "#CCCCCC"];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300 p-4 md:p-8 bg-pink-50 min-h-screen`}>
        <h2 className="text-3xl font-extrabold tracking-widest mb-6">Dashboard</h2>
        <h3 className="text-lg font-semibold uppercase mb-4">Sales Report:</h3>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow font-semibold">Total Sales: 16</div>
          <div className="bg-white p-4 rounded shadow font-semibold">Total Products Sold: 500</div>
          <div className="bg-white p-4 rounded shadow font-semibold">Number of Customers: 100</div>
        </div>

        {/* Gráficas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-md font-bold uppercase mb-4">Total Sales per Year</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-md font-bold uppercase mb-4">Calendar</h3>
            <CalendarComponent />
          </div>
        </div>

        {/* Gráficas secundarias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-md font-bold uppercase mb-4">Departments with Highest Sales</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {departmentData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-md font-bold uppercase mb-4">Most Used Sales Platform</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart layout="vertical" data={platformData}>
                <XAxis type="number" />
                <YAxis dataKey="platform" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
