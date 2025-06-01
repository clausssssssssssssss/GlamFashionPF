// src/hooks/useDataSuppliers.jsx
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useDataSuppliers = () => {
  const API_URL = "/api/suppliers";

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1) Función para obtener todos los suppliers
  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Hubo un error al obtener los proveedores");
      }
      const data = await res.json();
      setSuppliers(data);
    } catch (err) {
      console.error("Error en fetchSuppliers:", err);
      toast.error("Error al obtener proveedores");
    } finally {
      setLoading(false);
    }
  };

  // 2) Función para crear un nuevo supplier
  const createSupplier = async (newSupplier) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });
      if (!res.ok) {
        throw new Error("Error al registrar el proveedor");
      }
      const created = await res.json();
      toast.success("Proveedor registrado");
      // Actualizo el listado local sin necesidad de refetch completo
      setSuppliers((prev) => [...prev, created]);
      return created;
    } catch (err) {
      console.error("Error en createSupplier:", err);
      toast.error("No se pudo registrar el proveedor");
      throw err;
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return {
    suppliers,
    loading,
    fetchSuppliers,
    createSupplier,
  };
};
