import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecuperarContraseña3 = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!password.trim() || !confirm.trim()) {
      toast.error("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirm) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    toast.success("Contraseña actualizada.");
    navigate("/LoginAdmin");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 flex items-start justify-center pt-20 md:pt-32 px-6 md:px-20">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-extrabold tracking-widest mb-2 text-black">GLAMFASHION</h1>
          <h2 className="text-lg font-semibold mb-6 uppercase text-gray-700">Recover Password</h2>

          <form onSubmit={handleConfirm} className="space-y-4">
            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-sm uppercase text-gray-700 mb-1 block">Confirm New Password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-semibold uppercase rounded hover:bg-gray-900 transition-colors"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 hidden md:block">
        <img src="/images/RecuperarContraseña.jpeg" alt="Modelo Glamfashion" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default RecuperarContraseña3;
