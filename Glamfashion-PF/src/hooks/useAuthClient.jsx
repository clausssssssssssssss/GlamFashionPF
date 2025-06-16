// src/hooks/useAuthClient.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useAuthClient() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  // 1️⃣ LOGIN
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch("/api/clients/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message || "Error al iniciar sesión");
      localStorage.setItem("clientToken", data.token);
      localStorage.setItem("clientUser",  JSON.stringify(data.user));
      navigate("/Inicio");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ REGISTER
  const register = async ({ name, lastName, birthday, email, password, address }) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch("/api/clients/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, birthday, email, password, address }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message || "Error al registrarse");
      // opcional: hacer login automático tras registro
      localStorage.setItem("clientToken", data.token);
      localStorage.setItem("clientUser",  JSON.stringify(data.user));
      navigate("/Inicio");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 3️⃣ LOGOUT
  const logout = () => {
    localStorage.removeItem("clientToken");
    localStorage.removeItem("clientUser");
    navigate("/IniciarSesion");
  };

  return { login, register, logout, loading, error };
}
