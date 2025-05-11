import React from "react";
import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Botón para regresar */}
      <div className="mb-4">
        <Link to="/Dashboard">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            ← Back to Dashboard
          </button>
        </Link>
      </div>

      {/* Sección formulario */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-md font-bold uppercase mb-4">
          Add Products
        </h2>

        {/* Campos de entrada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" disabled />
          <input type="text" placeholder="Color" className="p-2 border rounded" disabled />
          <input type="text" placeholder="Size" className="p-2 border rounded" disabled />
          <input type="number" placeholder="Price" className="p-2 border rounded" disabled />
          <input type="text" placeholder="Category" className="p-2 border rounded" disabled />
          <input type="text" placeholder="Availability" className="p-2 border rounded" disabled />
        </div>

        {/* Campo imagen */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Product Image</label>
          <input type="file" className="p-2 border rounded w-full" disabled />
        </div>

        {/* Botones de acción sin funcionalidad */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="border px-6 py-2 rounded cursor-not-allowed bg-gray-200">
            Add
          </button>
          <button className="border px-6 py-2 rounded cursor-not-allowed bg-gray-200">
            Edit
          </button>
          <button className="border px-6 py-2 rounded cursor-not-allowed bg-gray-200">
            Eliminate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productos;
