// src/hooks/usePaymentFakeForm.jsx
import { useState } from "react";

export function usePaymentFakeForm() {
  const [error, setError] = useState(null);

  const handleFakePayment = async ({ nombreCliente, emailCliente, monto }) => {
    setError(null);
    try {
      // 0) Sacar userId de localStorage
      const stored = localStorage.getItem("clientUser");
      if (!stored) throw new Error("Usuario no autenticado");
      const { id: userId } = JSON.parse(stored);

      // 1) Preparar payload
      // Convertimos el monto (p.ej. "45.50") a centavos -> 4550
      const amount = Math.round(parseFloat(monto) * 100);
      const currency = "USD"; // o la que uses, p.ej. "COP"
      
      // 2) Llamar al backend a /api/token para generar token + guardar purchase
      const resp = await fetch("http://localhost:4000/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, amount, currency }),
      });
      if (!resp.ok) {
        const errJson = await resp.json().catch(() => null);
        throw new Error(errJson?.message || `Error ${resp.status}`);
      }
      const { token, purchase } = await resp.json();

      // 3) Aquí ya tienes:
      //    • token → tu JWT si lo usas
      //    • purchase → el documento guardado en MongoDB Atlas
      console.log("Token recibido:", token);
      console.log("Compra guardada:", purchase);
      console.log("Datos del formulario:", { nombreCliente, emailCliente, monto });

      // 4) Mostrar confirmación al usuario
      alert(`Pago simulado OK. Ref: ${purchase.reference}\nTotal: ${purchase.amount / 100} ${purchase.currency}`);
    } catch (err) {
      console.error("Error en el proceso de pago:", err);
      setError(err.message);
    }
  };

  return { handleFakePayment, error };
}
