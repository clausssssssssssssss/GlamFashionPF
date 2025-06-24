// src/pages/FormPaymentFake.jsx
import React, { useState } from "react";
import { usePaymentFakeForm } from "../hooks/usePaymentFakeForm";

export default function FormPaymentFake() {
  const { handleFakePayment, error } = usePaymentFakeForm();
  const [form, setForm] = useState({ nombreCliente: "", emailCliente: "", monto: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleFakePayment(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Fake Payment Example</h2>

        {["nombreCliente", "emailCliente", "monto"].map((field) => {
          const label = field === "monto" ? "Monto" : field === "emailCliente" ? "Email del Cliente" : "Nombre del Cliente";
          return (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium mb-1">{label} *</label>
              <input
                name={field}
                type={field === "monto" ? "number" : "text"}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-gray-300 focus:border-black transition py-2 px-1"
              />
            </div>
          );
        })}

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
        >
          Procesar Pago Fake
        </button>s
      </form>
    </div>
  );
}
