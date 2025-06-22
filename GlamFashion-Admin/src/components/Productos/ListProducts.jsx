// src/components/Productos/ListProducts.jsx
import React, { useState } from "react";

export default function ListProducts({ products, loading, deleteProduct, updateProduct }) {
  const [filter, setFilter] = useState("");

  if (loading) {
    return (
      <div className="w-full text-center py-10">
        <span className="text-gray-500">Cargando productos...</span>
      </div>
    );
  }

  // Filtrar productos por categoría
  const filtered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <div className="space-y-6">
      {/* Combobox de categorías */}
      <div className="max-w-md mx-auto">
        <label htmlFor="categoryFilter" className="block mb-2 font-medium">
          Filtrar por categoría:
        </label>
        <select
          id="categoryFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="">Todas las categorías</option>
          <option value="Vestidos">Vestidos</option>
          <option value="Tops">Tops</option>
          <option value="Shirts">Shirts</option>
          <option value="Skirts">Skirts</option>
          <option value="Pants">Pants</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="w-full text-center py-10">
          <span className="text-gray-500">No hay productos en esta categoría.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/no-image.png"; }}
                  />
                ) : (
                  <img
                    src="/no-image.png"
                    alt="Sin imagen"
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              {/* Detalles */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 truncate">
                    {product.description}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-medium">Precio:</span> ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <span className="font-medium">Stock:</span> {product.stock}
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="mt-4 flex justify-between">
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    onClick={() => updateProduct(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
