// src/components/Productos/ProductsCard.jsx
import React from "react";

const ProductsCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="h-40 w-full bg-gray-200 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-sm">
          <span className="font-medium">Price:</span> ${product.price}
        </p>
        <p className="text-sm">
          <span className="font-medium">Stock:</span> {product.stock}
        </p>

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onEdit(product)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Eliminate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
