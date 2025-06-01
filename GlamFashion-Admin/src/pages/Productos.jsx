// src/pages/Productos.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListProducts from "../components/Productos/ListProducts.jsx";
import RegisterProduct from "../components/Productos/RegisterProductos.jsx";
import toast, { Toaster } from "react-hot-toast";

const Productos = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("list");
  const API = "/api/products";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los productos");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Error al obtener productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !description.trim() ||
      !price ||
      !stock ||
      !image.trim()
    ) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const newProduct = { name, description, price, stock, image };
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        toast.error("Error al registrar el producto");
        return;
      }

      toast.success("Producto registrado");
      clearForm();
      fetchProducts();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error en la petición");
    }
  };

  const deleteProduct = async (productId) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar este producto?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`${API}/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        toast.error("Error al eliminar producto");
        return;
      }
      toast.success("Producto eliminado");
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Error en la petición");
    }
  };

  const updateProduct = (product) => {
    setId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setImage(product.image);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !description.trim() ||
      !price ||
      !stock ||
      !image.trim()
    ) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    try {
      const updated = { name, description, price, stock, image };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      toast.success("Producto actualizado");
      clearForm();
      fetchProducts();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error en la edición");
    }
  };

  const clearForm = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-red-50 py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        {/* Botón para regresar al Dashboard */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            ←
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-black mb-8">
          Gestión de Productos
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "list"
                ? "bg-red-100 text-black"
                : "bg-white text-black hover:bg-red-200"
            }`}
          >
            Ver Productos
          </button>

          <button
            onClick={() => {
              if (id) clearForm();
              setActiveTab("form");
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "form"
                ? "bg-red-100 text-black"
                : "bg-white text-black hover:bg-red-200"
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
              updateProduct={updateProduct}
            />
          ) : (
            <RegisterProduct
              id={id}
              name={name}
              description={description}
              price={price}
              stock={stock}
              image={image}
              setName={setName}
              setDescription={setDescription}
              setPrice={setPrice}
              setStock={setStock}
              setImage={setImage}
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
