// src/components/RecuperarContraseña2.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecuperarContraseña2 = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Recupero el email guardado en el paso 1
  const email = localStorage.getItem("recoveryEmail");

  useEffect(() => {
    if (!email) {
      // Si no hay email, volvemos al paso 1
      navigate("/RecuperarContraseña1");
    }
  }, [email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Por favor ingresa el código.");
      return;
    }

    setLoading(true);
    try {
      const resp = await fetch("/api/passwordRecovery/verifyCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
        credentials: "include", // para enviar la cookie tokenRecoveryCode
      });

      const data = await resp.json();
      if (!resp.ok) {
        toast.error(data.message || `Error ${resp.status}`);
        setLoading(false);
        return;
      }

      toast.success("Código verificado correctamente.");
      // Ya no es necesario guardar el código en localStorage,
      // pues el siguiente paso solo necesitará la cookie con el token verificado.
      navigate("/RecuperarContraseña3");
    } catch (err) {
      console.error("Error al verificar código:", err);
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

          <div className="mb-6 bg-gray-100 text-sm text-center py-3 px-4 font-semibold tracking-wide uppercase text-gray-800 rounded">
            Hemos enviado un correo con un código a <strong>{email}</strong>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">
                Código
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="Ingresa el código"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-500" : "bg-black"
              } text-white py-2 font-semibold uppercase rounded-full`}
            >
              {loading ? "VERIFICANDO..." : "VERIFICAR CÓDIGO"}
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

export default RecuperarContraseña2;
