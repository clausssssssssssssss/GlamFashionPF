import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function RegisterSuppliers({
  id,                
  name: initialName, 
  contactName: initialContact,
  phone: initialPhone,
  email: initialEmail,
  address: initialAddress,
  setName,
  setContactName,
  setPhone,
  setEmail,
  setAddress,
  saveSupplier,      
  handleEdit,        
}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica: el nombre no puede quedar vacío
    if (!initialName.trim()) {
      toast.error("El nombre del proveedor es obligatorio");
      return;
    }

    // Si id existe => editar
    if (id) {
      handleEdit(e); 
      return;
    }

    // Si no hay id => crear
    const newSupplier = {
      name: initialName.trim(),
      contactName: initialContact.trim(),
      phone: initialPhone.trim(),
      email: initialEmail.trim(),
      address: initialAddress.trim(),
    };

    saveSupplier(newSupplier);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Nombre</label>
        <input
          type="text"
          value={initialName}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Nombre del proveedor"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Nombre de Contacto</label>
        <input
          type="text"
          value={initialContact}
          onChange={(e) => setContactName(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Nombre de la persona de contacto"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Teléfono</label>
        <input
          type="tel"
          value={initialPhone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Ej: +503 1234-5678"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          value={initialEmail}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Dirección</label>
        <input
          type="text"
          value={initialAddress}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Dirección del proveedor"
        />
      </div>

      <button
        type="submit"
        className={`px-4 py-2 rounded text-white font-semibold ${
          id ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
        } transition`}
      >
        {id ? "Actualizar" : "Registrar Proveedor"}
      </button>
    </form>
  );
}
