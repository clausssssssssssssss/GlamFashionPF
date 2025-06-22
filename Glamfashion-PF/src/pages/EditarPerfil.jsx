import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function EditarPerfil() {
  const navigate = useNavigate();

  // Campos de usuario
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  // Al montar, traigo datos del usuario
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/clients/me", { credentials: "include" });
        if (!res.ok) throw new Error("No se pudo cargar tu perfil");
        const data = await res.json();
        setName(data.name || "");
        setLastname(data.lastname || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validación simple
    if (!name.trim() || !email.trim()) {
      toast.error("Nombre y correo son obligatorios");
      return;
    }

    try {
      const res = await fetch("/api/clients/me", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname, email, phone }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || "Error al actualizar perfil");
      }
      toast.success("Perfil actualizado");
      navigate("/Perfil");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-500">Cargando perfil…</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-md mx-auto bg-red-50 shadow-lg rounded-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/Perfil"
            className="text-sm underline text-black hover:text-gray-600 transition-colors"
          >
            ← Volver
          </Link>
          <h1 className="text-xl font-bold">Editar Perfil</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Apellido</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Tu apellido"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Teléfono</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(123) 456-7890"
              className="w-full border rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
      <Toaster toastOptions={{ duration: 2000 }} />
    </div>
  );
}
