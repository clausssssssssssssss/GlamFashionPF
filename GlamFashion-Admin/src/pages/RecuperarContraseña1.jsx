import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecuperarContraseña1 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Por favor, ingresa tu correo electrónico.");
      return;
    }

    toast.success("Código enviado al correo.");
    navigate("/RecuperarContraseña2");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black">GLAMFASHION</h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700">Recover Password</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-semibold uppercase rounded-full"
            >
              Recover Password
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-600">
            <Link to="/LoginAdmin" className="hover:underline font-semibold uppercase">
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 hidden md:block">
        <img src="/images/RecuperarContraseña.jpeg" alt="Modelo Glamfashion" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default RecuperarContraseña1;
