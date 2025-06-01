// src/components/Suppliers/ListSuppliers.jsx
import React from "react";
import SuppliersCard from "./SuppliersCard.jsx";

export default function ListSuppliers({
  suppliers,
  loading,
  deleteSupplier,
  updateSupplier,
}) {
  if (loading) {
    return (
      <div className="w-full text-center py-10">
        <span className="text-gray-500">Cargando proveedores...</span>
      </div>
    );
  }

  // Opcional: filtrar registros sin nombre
  const filtered = suppliers.filter(
    (s) => s.name && s.name.toString().trim() !== ""
  );

  if (!filtered.length) {
    return (
      <div className="w-full text-center py-10">
        <span className="text-gray-500">No hay proveedores registrados.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((supplier) => (
        <SuppliersCard
          key={supplier._id}
          supplier={supplier}
          deleteSupplier={deleteSupplier}       
          updateSupplier={updateSupplier}       
          />
      ))}
    </div>
  );
}
