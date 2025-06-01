// src/components/Productos/RegisterProductos.jsx
import React from "react";

export default function RegisterProduct({
  id,
  name,
  description,
  price,
  stock,
  image,
  setName,
  setDescription,
  setPrice,
  setStock,
  setImage,
  saveProduct,
  handleEdit,
}) {
  return (
    <form
      onSubmit={id ? handleEdit : saveProduct}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* --- Primera fila: Name + Description --- */}
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded p-2"
        />
      </div>

      {/* --- Segunda fila: Price + Stock --- */}
      <div>
        <label className="block font-medium mb-1">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="w-full border rounded p-2"
        />
      </div>

      {/* --- Tercera fila (full width): Image URL --- */}
      <div className="md:col-span-2">
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full border rounded p-2"
        />
      </div>

      {/* --- Botón (centrado en grid) --- */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className={`px-6 py-2 rounded text-white font-semibold ${
            id ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          } transition`}
        >
          {id ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
}
