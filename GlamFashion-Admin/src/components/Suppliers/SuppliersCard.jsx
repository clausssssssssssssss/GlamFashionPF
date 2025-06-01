// src/components/Suppliers/SuppliersCard.jsx
import React from "react";

export default function SuppliersCard({
  supplier,
  deleteSupplier,
  updateSupplier,
}) {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Aquí puedes agregar un encabezado con el nombre */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl mb-2 text-black">
            {supplier.name || "Sin nombre"}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Contacto:</span>{" "}
            {supplier.contactName || "-"}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Teléfono:</span>{" "}
            {supplier.phone || "-"}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Email:</span> {supplier.email || "-"}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Dirección:</span>{" "}
            {supplier.address || "-"}
          </p>
        </div>

        {/* Aquí agregamos los dos botones al final de la tarjeta */}
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            onClick={() => updateSupplier(supplier)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            onClick={() => deleteSupplier(supplier._id)}
          >
            Eliminate
          </button>
        </div>
      </div>
    </div>
  );
}
