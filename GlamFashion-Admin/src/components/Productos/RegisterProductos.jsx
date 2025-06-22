// src/components/Productos/RegisterProductos.jsx
import React, { useState, useEffect } from "react";

export default function RegisterProduct({
  id,
  name,
  description,
  price,
  stock,
  image,
  category,
  setName,
  setDescription,
  setPrice,
  setStock,
  setImage,
  setCategory,
  saveProduct,
  handleEdit,
}) {
  // Opciones de categoría (podrías traerlas dinámicamente)
  const categories = ["Vestidos", "Tops", "Shirts", "Skirts", "Pants"];

  // Estado interno de categoría si no proveen setCategory
  const [localCategory, setLocalCategory] = useState(category || "");

  // Sincronizar con prop category
  useEffect(() => {
    if (category !== undefined) {
      setLocalCategory(category);
    }
  }, [category]);

  // Handler unificado para select
  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setLocalCategory(val);
    if (typeof setCategory === "function") {
      setCategory(val);
    }
  };

  // Form submit decide según presencia de id
  const onSubmit = id ? handleEdit : saveProduct;

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Name */}
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full border rounded p-2"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          className="w-full border rounded p-2"
          required
          minLength={5}
        />
      </div>

      {/* Price */}
      <div>
        <label className="block font-medium mb-1">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0.00"
          className="w-full border rounded p-2"
          min="0"
          step="0.01"
          required
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block font-medium mb-1">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="0"
          className="w-full border rounded p-2"
          min="0"
        />
      </div>

      {/* Image URL full width */}
      <div className="md:col-span-2">
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
          className="w-full border rounded p-2"
        />
      </div>

      {/* Category full width */}
      <div className="md:col-span-2">
        <label className="block font-medium mb-1">Category</label>
        <select
          value={localCategory}
          onChange={handleCategoryChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">-- Select category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button full width */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className={`px-6 py-2 rounded text-white font-semibold transition ${
            id ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {id ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
}
