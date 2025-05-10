import React from "react";
import { Link } from "react-router-dom";

const EditarPerfil = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Botón Regresar */}
      <div className="mb-4">
        <Link
          to="/Inicio"
          className="text-sm text-black underline hover:text-gray-600"
        >
          Go back
        </Link>
      </div>

      {/* Contenido de perfil */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
        <h2 className="text-xl font-semibold">Claudia Ortega</h2>
      </div>

      <div className="flex mt-10 gap-10 justify-center">
        {/* Formulario de datos */}
        <div className="space-y-4 w-72">
          <input type="text" placeholder="NAME" className="border-b w-full p-2" />
          <input type="text" placeholder="LAST NAME" className="border-b w-full p-2" />
          <input type="date" placeholder="DATE" className="border-b w-full p-2" />
          <input type="email" placeholder="EMAIL" className="border-b w-full p-2" />
          <input type="password" placeholder="CONTRASEÑA" className="border-b w-full p-2" />
          <input type="text" placeholder="DIRECCIÓN" className="border-b w-full p-2" />
        </div>

        {/* Métodos de pago */}
        <div className="space-y-4 w-72">
          <h3 className="text-sm font-semibold uppercase text-center">Mis Métodos de Pago</h3>
          <div className="bg-gray-100 p-4 rounded-md shadow-sm text-sm">
            <p>1123 4567 7890 8900</p>
            <p>Claudia María Ortega</p>
            <p className="text-xs text-gray-500">Since: 12/24  Exp: 06/29</p>
          </div>
          <button className="border border-black px-4 py-2 font-semibold uppercase w-full">
           NEW METHOD
          </button>
          <Link to="/Perfil" className="ml-2">
                        <button className="border border-black px-4 py-1 mt-2 font-semibold uppercase">
                          Guardar
                        </button>
                      </Link>
          
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
