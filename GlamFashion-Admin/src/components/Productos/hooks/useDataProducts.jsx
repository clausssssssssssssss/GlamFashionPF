// src/components/Productos/hooks/useDataProducts.jsx
import { useState, useEffect } from "react";

const BASE_URL = "/api/products";

export function useDataProducts() {
  const [products, setProducts] = useState([]);    
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState(null);        

  // 1) Al montar, traemos todos los productos
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const resp = await fetch(BASE_URL);
        if (!resp.ok) {
          throw new Error(`Error ${resp.status}`);
        }
        const data = await resp.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const addProduct = async (productData) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null);
        throw new Error(errJson?.message || `Error ${resp.status}`);
      }
      const newProduct = await resp.json();
      setProducts((prev) => [newProduct, ...prev]);
      return newProduct;
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // 3) Editar un producto existente (PUT /api/products/:id)
  const editProduct = async (id, productData) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null);
        throw new Error(errJson?.message || `Error ${resp.status}`);
      }
      const updatedProduct = await resp.json();
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? updatedProduct : p))
      );
      return updatedProduct;
    } catch (err) {
      console.error("Error editing product:", err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // 4) Eliminar un producto (DELETE /api/products/:id)
  const deleteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null);
        throw new Error(errJson?.message || `Error ${resp.status}`);
      }
      setProducts((prev) => prev.filter((p) => p._id !== id));
      return true;
    } catch (err) {
      console.error("Error deleting product:", err);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    addProduct,
    editProduct,
    deleteProduct,
  };
}
