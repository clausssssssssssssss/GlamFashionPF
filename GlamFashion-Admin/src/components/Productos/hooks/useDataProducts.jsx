// src/pages/ProductosAdmin.jsx
import React, { useState } from "react";
import RegisterProduct from "../components/Productos/RegisterProductos";
import ListProducts     from "../components/Productos/ListProducts";
import { useDataProducts } from "../components/Productos/hooks/useDataProducts";

export default function ProductosAdmin() {
  // --- estado global de los productos ---
  const {
    products,
    loading,
    addProduct,
    editProduct,
    deleteProduct,
  } = useDataProducts();

  // --- estados del formulario ---
  const [id,          setId]          = useState(null);
  const [name,        setName]        = useState("");
  const [description, setDescription] = useState("");
  const [price,       setPrice]       = useState("");
  const [stock,       setStock]       = useState("");
  const [image,       setImage]       = useState("");
  const [category,    setCategory]    = useState("");    // <--- nuevo

  // Al pulsar “Editar” relleno todos los campos, incluida la categoría
  const handleEditInit = (prod) => {
    setId(prod._id);
    setName(prod.name);
    setDescription(prod.description);
    setPrice(prod.price);
    setStock(prod.stock);
    setImage(prod.image);
    setCategory(prod.category);    // <--- aquí
  };

  // Guardar nuevo producto
  const saveProduct = async (e) => {
    e.preventDefault();
    await addProduct({ name, description, price, stock, image, category });
    clearForm();
  };

  // Actualizar producto existente
  const handleEdit = async (e) => {
    e.preventDefault();
    await editProduct(id, { name, description, price, stock, image, category });
    clearForm();
  };

  // Limpiar el formulario
  const clearForm = () => {
    setId(null);
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImage("");
    setCategory("");             // <--- y aquí
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold text-center">Gestión de Productos</h1>

      <RegisterProduct
        id={id}
        name={name}
        description={description}
        price={price}
        stock={stock}
        image={image}
        category={category}        // <--- paso los dos
        setName={setName}
        setDescription={setDescription}
        setPrice={setPrice}
        setStock={setStock}
        setImage={setImage}
        setCategory={setCategory}  // <--- 
        saveProduct={saveProduct}
        handleEdit={handleEdit}
      />

      <ListProducts
        products={products}
        loading={loading}
        updateProduct={handleEditInit}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}
