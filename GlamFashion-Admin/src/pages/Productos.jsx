// src/pages/Productos.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListProducts from "../components/Productos/ListProducts.jsx";
import RegisterProduct from "../components/Productos/RegisterProductos.jsx";
import toast, { Toaster } from "react-hot-toast";

const Productos = () => {
  const navigate = useNavigate();
  const API = "/api/products";

  // Pestañas: "list" o "form"
  const [activeTab, setActiveTab] = useState("list");

  // Campos del formulario
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  // Lista de productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      toast.error("Error al obtener productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const clearForm = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImage("");
    setCategory("");
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock || !category) {
      toast.error("Completa todos los campos");
      return;
    }
    try {
      const newProduct = { name, description, price, stock, image, category };
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      toast.success("Producto agregado");
      clearForm();
      fetchProducts();
      setActiveTab("list");
    } catch (err) {
      console.error(err);
      toast.error("Error al agregar");
    }
  };

  const handleEditInit = (prod) => {
    setId(prod._id);
    setName(prod.name);
    setDescription(prod.description);
    setPrice(prod.price);
    setStock(prod.stock);
    setImage(prod.image || "");
    setCategory(prod.category || "");
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock || !category) {
      toast.error("Completa todos los campos");
      return;
    }
    try {
      const updated = { name, description, price, stock, image, category };
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      toast.success("Producto actualizado");
      clearForm();
      fetchProducts();
      setActiveTab("list");
    } catch (err) {
      console.error(err);
      toast.error("Error al actualizar");
    }
  };

  const deleteProduct = async (prodId) => {
    if (!window.confirm("¿Eliminar producto?")) return;
    try {
      const res = await fetch(`${API}/${prodId}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      toast.success("Producto eliminado");
      fetchProducts();
    } catch (err) {
      console.error(err);
      toast.error("Error al eliminar");
    }
  };

  return (
    <div className="min-h-screen bg-red-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-red-200 text-black rounded hover:bg-red-300 mb-6"
        >
          ← Regresar
        </button>

        <h1 className="text-3xl font-extrabold text-center mb-8">
          Gestión de Productos
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-6 py-2 rounded-full transition font-semibold ${
              activeTab === "list"
                ? "bg-red-100 text-black"
                : "bg-white text-gray-700 hover:bg-red-200"
            }`}
          >
            Ver Productos
          </button>
          <button
            onClick={() => {
              clearForm();
              setActiveTab("form");
            }}
            className={`px-6 py-2 rounded-full transition font-semibold ${
              activeTab === "form"
                ? "bg-red-100 text-black"
                : "bg-white text-gray-700 hover:bg-red-200"
            }`}
          >
            Añadir / Editar
          </button>
        </div>

        <div className="bg-pink-50 rounded-xl p-6 shadow-inner">
          {activeTab === "list" ? (
            <ListProducts
              products={products}
              loading={loading}
              deleteProduct={deleteProduct}
              updateProduct={handleEditInit}
            />
          ) : (
            <RegisterProduct
              id={id}
              name={name}
              description={description}
              price={price}
              stock={stock}
              image={image}
              category={category}
              setName={setName}
              setDescription={setDescription}
              setPrice={setPrice}
              setStock={setStock}
              setImage={setImage}
              setCategory={setCategory}
              saveProduct={saveProduct}
              handleEdit={handleEdit}
            />
          )}
        </div>
      </div>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Productos;
