// src/components/Productos/ListProducts.jsx

import React from "react";

export default function ListProducts({ products, loading, deleteProduct, updateProduct }) {
  if (loading) {
    return (
      <div className="w-full text-center py-10">
        <span className="text-gray-500">Cargando productos...</span>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="w-full text-center py-10">
        <span className="text-gray-500">No hay productos registrados.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          {/* CONTENEDOR DE IMAGEN */}
          <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Si existe product.image, muéstrala; si no, pon un placeholder */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Si la URL de imagen es inválida, se muestra una imagen por defecto
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
            ) : (
              <div className="text-gray-400">Sin imagen</div>
            )}
          </div>

          {/* DETALLES DEL PRODUCTO */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {product.description}
              </p>
              <p className="text-sm">
                <span className="font-medium">Precio:</span> ${product.price}
              </p>
              <p className="text-sm">
                <span className="font-medium">Stock:</span> {product.stock}
              </p>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                onClick={() => updateProduct(product)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={() => deleteProduct(product._id)}
              >
                Eliminate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
