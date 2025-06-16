// src/pages/TerminosCondiciones.jsx
import React from "react";
import { Link } from "react-router-dom";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-12 px-6">
      {/* Botón Regresar */}
      <nav className="self-start">
        <Link
          to="/PrimeraVista"
          className="text-sm uppercase tracking-wide text-gray-700 hover:text-gray-900 transition"
        >
          ← Volver
        </Link>
      </nav>

      {/* Encabezado */}
      <header className="max-w-3xl text-center mt-6 mb-10">
        <h1 className="text-4xl font-extrabold uppercase tracking-widest mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-gray-600">
          Lee con atención los términos que regulan el uso de nuestra plataforma.
        </p>
      </header>

      {/* Contenido de términos */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl space-y-6 mb-10">
        <p>
          Al usar nuestra aplicación, aceptas cumplir estos términos y condiciones. Si no
          estás de acuerdo, te recomendamos no utilizar nuestros servicios.
        </p>
        <p>
          Debes registrarte con información veraz y mantener la seguridad de tu cuenta,
          evitando usos indebidos o ilícitos de la app.
        </p>
        <p>
          Recopilamos y almacenamos datos personales, financieros y de ubicación de
          acuerdo con nuestra Política de Privacidad.
        </p>
        <p>
          Los pagos se procesan de forma segura; eres responsable de cualquier actividad
          realizada con tu cuenta.
        </p>
        <p>
          Todo el contenido de la app es propiedad de <strong>GLAMFASHION</strong> y está
          protegido. No puede copiarse sin autorización.
        </p>
        <p>
          No nos hacemos responsables de daños derivados del uso de la app y
          nos reservamos el derecho de modificar estos términos en cualquier momento.
        </p>
        <p>
          Para consultas, escríbenos a <a href="mailto:glamfashioncar@gmail.com" className="text-blue-600 hover:underline">glamfashioncar@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
