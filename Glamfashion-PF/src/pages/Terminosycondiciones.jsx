import React from "react";
import { Link } from "react-router-dom";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center items-center p-8">
      <h1 className="text-xl font-semibold tracking-widest mb-6 text-center">
        TERMINOS Y CONDICIONES
      </h1>

      <p className="max-w-2xl text-sm leading-6 text-center mb-10">
        Al utilizar nuestra aplicación, usted acepta estos términos y condiciones.
        Si no está de acuerdo, le recomendamos no usar nuestros servicios.
        Debe registrarse con información veraz y mantener la seguridad de su cuenta,
        sin hacer un uso indebido o ilícito de la aplicación. Recopilamos y almacenamos
        información personal, financiera y de ubicación conforme a nuestra Política de Privacidad.
        Los pagos se procesan de forma segura, y usted es responsable de cualquier actividad en su cuenta.
        Todo el contenido de la aplicación es propiedad de GLAMFASHION y no puede ser copiado sin autorización.
        No nos hacemos responsables por daños derivados del uso de la aplicación, y nos reservamos el derecho
        de modificar estos términos en cualquier momento. Para consultas, contáctenos en: glamfashionhelp.com.
        Al usar la aplicación, confirma que acepta estos términos.
      </p>

      <Link
        to="/inicio"
        className="bg-black text-white px-8 py-2 rounded-full uppercase font-semibold" >
      </Link>
    </div>
  );
};

export default TerminosCondiciones;
