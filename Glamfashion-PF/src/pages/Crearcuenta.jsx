import React, { useState } from "react";
import { useAuthClient } from "../hooks/useAuthClient";
import { Link } from "react-router-dom";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-black">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-12 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-extrabold tracking-widest mb-2 text-center md:text-left">GLAMFASHION</h2>
          <h3 className="text-lg font-semibold uppercase mb-6 text-center md:text-left">Regístrate</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="w-full border-b border-black p-2" />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido" className="w-full border-b border-black p-2" />
            <input name="birthday" type="date" value={form.birthday} onChange={handleChange} className="w-full border-b border-black p-2" />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border-b border-black p-2" />
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Contraseña" className="w-full border-b border-black p-2" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" className="w-full border-b border-black p-2" />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button type="submit" disabled={loading} className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full">
              {loading ? "REGISTRANDO..." : "REGISTRATE"}
            </button>
          </form>

          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-600">
            <p>¿Ya tienes cuenta?</p>
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
        <img src="/images/CrearCuenta.jpg" alt="Modelo Glamfashion" className="w-full max-w-[500px] h-auto object-contain" />
      </div>
    </div>
  );
};

export default CrearCuenta;
