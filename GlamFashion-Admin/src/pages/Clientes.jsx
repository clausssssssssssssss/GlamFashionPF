// src/pages/Clientes.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataClients } from "../components/clients/hooks/useDataClients.jsx";
import ListClients from "../components/clients/ListClients.jsx";

const Clientes = () => {
  const {
    clients,
    loading,
    error,
    addClient,
    updateClient,
    deleteClient,
  } = useDataClients();

  const navigate = useNavigate();  

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateClient(editingId, form);
    } else {
      await addClient(form);
    }
    setForm({ name: "", lastName: "", birthday: "", email: "", phone: "", password: "" });
    setEditingId(null);
  };

  const handleEdit = (client) => {
    setForm({
      name: client.name,
      lastName: client.lastName,
      birthday: client.birthday?.split("T")[0],
      email: client.email,
      phone: client.phone || "",
      password: "",
    });
    setEditingId(client._id);
  };

  return (
       <div className="min-h-screen bg-red-50 py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-10">
        <div className="mb-6">
          <button
            onClick={() => navigate("/Dashboard")}
            className="px-4 py-2 bg-red-200 text-black rounded hover:bg-black-700 transition">
            Regresar
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-black mb-8">
          Clientes registrados
        </h1>
      </div>

      {/* Tabla de clientes */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-6 gap-4 font-semibold text-center uppercase text-sm mb-2">
          <span>Name</span>
          <span>Last Name</span>
          <span>Birthday</span>
          <span>E-mail</span>
          <span>Phone</span>
          <span>Actions</span>
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ListClients clients={clients} onEdit={handleEdit} onDelete={deleteClient} />
        )}
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Clientes;
