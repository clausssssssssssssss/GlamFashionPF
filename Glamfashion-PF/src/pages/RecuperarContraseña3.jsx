// src/components/RecuperarContraseña3.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecuperarContraseña3 = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Recuperamos el email y suponemos que la cookie tokenRecoveryCode tiene verified: true
  const email = localStorage.getItem("recoveryEmail");

  useEffect(() => {
    if (!email) {
      // Si no hay email, regresamos a paso 1
      navigate("/IniciarSesion");
    }
  }, [email, navigate]);

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (!password.trim() || !confirm.trim()) {
      toast.error("Todos los campos son obligatorios.");
      return;
    }
    if (password !== confirm) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      const resp = await fetch("/api/passwordRecovery/resetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword: password }),
        credentials: "include", // enviamos la cookie tokenRecoveryCode verificado
      });

      const data = await resp.json();
      if (!resp.ok) {
        toast.error(data.message || `Error ${resp.status}`);
        setLoading(false);
        return;
      }

      // Si llega aquí, la contraseña se actualizó exitosamente en el backend
      localStorage.removeItem("recoveryEmail");
      toast.success("Contraseña actualizada correctamente.");
      navigate("/LoginAdmin");
    } catch (err) {
      console.error("Error al restablecer contraseña:", err);
      toast.error("Error del servidor, inténtalo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black">
            GLAMFASHION
          </h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700">
            Recuperar Contraseña
          </h2>

          <form onSubmit={handleConfirm} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">
                Nueva Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">
                Confirmar Nueva Contraseña
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-500" : "bg-black"
              } text-white py-2 font-semibold uppercase rounded-full`}
            >
              {loading ? "ACTUALIZANDO..." : "CONFIRMAR"}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src="/images/RecuperarContraseña.jpeg"
          alt="Recuperación"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RecuperarContraseña3;
