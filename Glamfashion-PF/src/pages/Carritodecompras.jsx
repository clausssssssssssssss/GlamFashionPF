import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carritodecompras = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("clientToken");
    if (!token) {
      // No hay sesión de cliente → redirigir a login
      navigate("/IniciarSesion");
    }
  }, [navigate]);

  // Si hay token, renderizas normalmente el carrito...
  return <div>Tu carrito aquí</div>;
};

export default Carritodecompras;
