import React from "react";
import { useNavigate, Link } from "react-router-dom";

const CrearCuenta = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías validar o guardar los datos si es necesario
    navigate("/Inicio");
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
            Regístrate
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border-b border-black p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="w-full border-b border-black p-2 focus:outline-none"
            />
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              className="w-full border-b border-black p-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-black p-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border-b border-black p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Dirección"
              className="w-full border-b border-black p-2 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full"
            >
              Registrate
            </button>
          </form>

          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-600">
  <p>Do you already have an account?</p>
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
