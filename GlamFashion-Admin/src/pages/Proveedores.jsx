// src/pages/Suppliers.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListSuppliers from "../components/Suppliers/ListSuppliers.jsx";
import RegisterSuppliers from "../components/Suppliers/RegisterSuppliers.jsx";
import toast, { Toaster } from "react-hot-toast";

const Suppliers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("list");
  const API = "/api/suppliers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los proveedores");
      }
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error(error);
      toast.error("Error al obtener proveedores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  // ======== CREAR PROVEEDOR (esta función ya está bien como la tienes) ========
  const saveSupplier = async (newSupplier) => {
    if (!newSupplier.name) {
      toast.error("Por favor completa el nombre del proveedor");
      return;
    }
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });
      if (!response.ok) {
        toast.error("Error al registrar el proveedor");
        return;
      }
      toast.success("Proveedor registrado");
      clearForm();
      fetchSuppliers();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error en la petición");
    }
  };

  // ======== ELIMINAR PROVEEDOR ========
  const deleteSupplier = async (supplierId) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar este proveedor?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`${API}/${supplierId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        toast.error("Error al eliminar proveedor");
        return;
      }
      toast.success("Proveedor eliminado");
      fetchSuppliers();
    } catch (error) {
      console.error(error);
      toast.error("Error en la petición");
    }
  };

  // ======== EDITAR (solo precarga los datos en el formulario) ========
  const updateSupplier = (supplier) => {
    setId(supplier._id);
    setName(supplier.name);
    setContactName(supplier.contactName || "");
    setPhone(supplier.phone || "");
    setEmail(supplier.email || "");
    setAddress(supplier.address || "");
    setActiveTab("form");
  };

  // ======== GUARDAR CAMBIOS (update) ========
  const handleEdit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor completa el nombre del proveedor");
      return;
    }
    try {
      const updated = {
        name: name.trim(),
        contactName: contactName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        address: address.trim(),
      };
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor");
      }
      toast.success("Proveedor actualizado");
      clearForm();
      fetchSuppliers();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error en la edición");
    }
  };

  const clearForm = () => {
    setId("");
    setName("");
    setContactName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="min-h-screen bg-red-50 py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <div className="mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            ←
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-black mb-8">
          Gestión de Proveedores
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
            Ver Proveedores
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
            <ListSuppliers
              suppliers={suppliers}
              loading={loading}
              deleteSupplier={deleteSupplier}     // <— pasamos aquí
              updateSupplier={updateSupplier}     // <— y aquí
            />
          ) : (
            <RegisterSuppliers
              id={id}
              name={name}
              contactName={contactName}
              phone={phone}
              email={email}
              address={address}
              setName={setName}
              setContactName={setContactName}
              setPhone={setPhone}
              setEmail={setEmail}
              setAddress={setAddress}
              saveSupplier={saveSupplier}
              handleEdit={handleEdit}
            />
          )}
        </div>
      </div>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Suppliers;
