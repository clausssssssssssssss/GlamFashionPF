// src/hooks/useFetchProducts.js
import { useEffect, useState, useCallback } from "react";

const API_BASE = "http://localhost:4000/api";

export default function useFetchProducts(category = "") {
  const [products, setProducts]   = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  // Llama al endpoint /api/products o /api/products?category=X
  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const url = category
        ? `${API_BASE}/products?category=${encodeURIComponent(category)}`
        : `${API_BASE}/products`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Error al traer productos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Llama al endpoint /api/categories
  const getCategories = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/categories`);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error("Error al traer categorías:", err);
    }
  }, []);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [getProducts, getCategories]);

  return { products, categories, loading, error };
}
