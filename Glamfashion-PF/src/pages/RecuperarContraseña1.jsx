// src/components/RecuperarContraseña1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecuperarContraseña1 = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Por favor ingresa tu correo electrónico.");
      return;
    }

    setLoading(true);
    try {
      const resp = await fetch("/api/passwordRecovery/requestCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include", // importante para que la cookie tokenRecoveryCode sea enviada
      });

      const data = await resp.json();
      if (!resp.ok) {
        toast.error(data.message || `Error ${resp.status}`);
        setLoading(false);
        return;
      }

      // Si llegamos aquí, el backend envió la cookie con tokenRecoveryCode
      toast.success("Código de verificación enviado a tu correo.");
      // Guardamos el email solo para mostrarlo en el siguiente paso
      localStorage.setItem("recoveryEmail", email);
      navigate("/RecuperarContraseña2");
    } catch (err) {
      console.error("Error al solicitar código:", err);
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

          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">
                E‐mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="tucorreo@dominio.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-500" : "bg-black"
              } text-white py-2 font-semibold uppercase rounded-full`}
            >
              {loading ? "ENVIANDO..." : "ENVIAR CÓDIGO"}
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

export default RecuperarContraseña1;
