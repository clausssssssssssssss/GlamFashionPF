// src/hooks/useLoginAdmin.jsx
import { useState } from "react";

export function useLoginAdmin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const resp = await fetch("/api/admins/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null);
        throw new Error(errJson?.message || `Error ${resp.status}`);
      }

      const data = await resp.json();
      console.log("Admin logueado:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      return data; // Retornamos “data” al componente
    } catch (err) {
      console.error("Error en handleLogin:", err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loginData, loading, error, handleChange, handleLogin };
}
