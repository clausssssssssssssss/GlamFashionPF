import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Administradores = () => {
  const admins = [
    { name: "Claudia", lastName: "Hernandez", email: "clau@glamfashion.com", password: "••••••••", phone: "+503 7000-1111" },
    { name: "Ruth", lastName: "Ramírez", email: "Ru@glamfashion.com", password: "••••••••", phone: "+503 7000-2222" },
    { name: "Allan", lastName: "Rivas", email: "Allan@glamfashion.com", password: "••••••••", phone: "+503 7000-3333" }
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-16 md:ml-64 p-6 bg-white min-h-screen">

        <h1 className="text-2xl font-extrabold tracking-widest mb-2">GLAMFASHION</h1>
        <h2 className="text-lg font-semibold uppercase mb-6">Administrators</h2>

        {/* Tabla de Administradores */}
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-center">
            <thead className="bg-black text-white uppercase text-sm">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">E-mail</th>
                <th className="p-3">Passwords</th>
                <th className="p-3">Phone</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3">{admin.lastName}</td>
                  <td className="p-3">{admin.email}</td>
                  <td className="p-3">{admin.password}</td>
                  <td className="p-3">{admin.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Administradores;
