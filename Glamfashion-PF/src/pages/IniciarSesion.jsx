import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthClient } from "../hooks/useAuthClient";

const IniciarSesion = () => {
  const { login, loading, error } = useAuthClient();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Imagen lateral */}
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <img
          src="/images/IniciarSesion.jpg"
          alt="Modelo Glamfashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 md:p-20 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-4 tracking-widest text-center md:text-left">
            GLAMFASHION
          </h2>
          <h3 className="text-lg font-semibold mb-6 uppercase text-center md:text-left">
            LOGIN
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm uppercase">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="ejemplo@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm uppercase">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-black focus:outline-none p-2"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="text-right text-xs text-gray-500 cursor-pointer hover:underline">
              <Link to="/RecuperarContraseña1">¿Olvidaste tu contraseña?</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-black text-white py-2 font-semibold uppercase rounded-full transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
            >
              {loading ? "Ingresando..." : "INICIAR SESION"}
            </button>

            {error && (
              <p className="text-red-600 text-center mt-2">{error}</p>
            )}
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <span>No tienes cuenta?</span>
            <Link to="/CrearCuenta" className="ml-2">
              <button className="border border-black py-1 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                REGISTRATE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
