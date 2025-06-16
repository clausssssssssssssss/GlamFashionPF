import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthClient } from "../hooks/useAuthClient";

const CrearCuenta = () => {
  const { register, loading, error } = useAuthClient();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    password: "",
    address: "",
  });

  // Actualizamos cada campo
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ahora sí llamamos a register() en lugar de solo navigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-black">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-12 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-extrabold tracking-widest mb-2 text-center md:text-left">
            GLAMFASHION
          </h2>
          <h3 className="text-lg font-semibold uppercase mb-6 text-center md:text-left">
            REGÍSTRATE
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="NOMBRE"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="APELLIDO"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />
            <input
              name="birthday"
              type="date"
              value={form.birthday}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="CONTRASEÑA"
              value={form.password}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />
            <input
              name="address"
              type="text"
              placeholder="DIRECCIÓN"
              value={form.address}
              onChange={handleChange}
              className="w-full border-b border-black p-2 focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-black text-white py-2 font-semibold uppercase rounded-full transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
              }`}
            >
              {loading ? "Registrando..." : "REGÍSTRATE"}
            </button>

            {error && (
              <p className="text-red-600 text-center mt-2">{error}</p>
            )}
          </form>

          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-600">
            <span>¿Ya tienes cuenta?</span>
            <Link to="/IniciarSesion">
              <button className="border border-black py-1 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-6 md:py-0">
        <img
          src="/images/CrearCuenta.jpg"
          alt="Modelo Glamfashion"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CrearCuenta;
