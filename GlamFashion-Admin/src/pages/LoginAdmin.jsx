import React from "react";
import { Link } from "react-router-dom";
import { useLoginUser } from "../hooks/useLoginUser";

const LoginAdmin = () => {
  const { loginData, handleChange, handleLogin } = useLoginUser();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 sm:px-10 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black text-left">
            GLAMFASHION
          </h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700 text-left">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">E-mail</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-600">
            <Link to="/RecuperarContraseña1" className="hover:underline">
              FORGET MY PASSWORD
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen lateral */}
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
