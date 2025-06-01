// src/components/LoginAdmin.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginAdmin } from "../hooks/useLoginAdmin";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const { loginData, loading, error, handleChange, handleLogin } = useLoginAdmin();

  // Creamos un onSubmit que envuelva a handleLogin para capturar el resultado.
  const onSubmit = async (e) => {
    // La lógica de handleLogin ya hace e.preventDefault()
    const data = await handleLogin(e);

    // Si data NO es null, el login fue exitoso
    if (data) {
      // Redirige al dashboard
      navigate("/Dashboard");
    }
    // Si data === null, no hacemos nada porque ya se pintó el error en pantalla
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 sm:px-10 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black text-left">
            GLAMFASHION
          </h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700 text-left">
            Login Admin
          </h2>

          {/* Aquí reemplazamos onSubmit={handleLogin} por onSubmit={onSubmit} */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">E‐mail</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="claudiamariadream@gmail.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Botón de LOGIN */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-gray-500" : "bg-black"} text-white py-2 font-semibold uppercase rounded-full`}
            >
              {loading ? "INGRESANDO..." : "LOGIN"}
            </button>

            {/* Mostrar mensaje de error si existe */}
            {error && (
              <p className="text-red-600 text-sm mt-2">
                {error}
              </p>
            )}
          </form>

          <div className="mt-6 text-center text-xs text-gray-600">
            <Link to="/RecuperarContraseña1" className="hover:underline">
              FORGET MY PASSWORD
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen lateral (solo visible en pantallas md+) */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src="/images/Login-pica.png"
          alt="Modelo Glamfashion"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginAdmin;
