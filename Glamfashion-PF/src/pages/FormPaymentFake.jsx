// src/pages/FormPaymentFake.jsx
import React from "react";
import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import usePaymentFakeForm from "../hooks/usePaymentFakeForm";
import TitleH1 from "../components/TitleH1";

const FormPaymentFake = () => {
  const { formData, datosEnviados, handleChange, handleSubmit, limpiarFormulario, handleFakePayment } = usePaymentFakeForm();

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-red-50 py-8 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-red-200">
          <TitleH1 text="Pago Simulado" />
          <div className="space-y-4 mt-4">
            <InputField id="nombreCliente" name="nombreCliente" value={formData.nombreCliente} onChange={handleChange} type="text" label="Nombre" placeholder="Nombre Completo" required />
            <InputField id="emailCliente" name="emailCliente" value={formData.emailCliente} onChange={handleChange} type="email" label="Email" placeholder="correo@ejemplo.com" required />
            <InputField id="monto" name="monto" value={formData.monto} onChange={handleChange} type="number" label="Monto" placeholder="0.00" min="0" step="0.01" required />
            <Button onClick={handleSubmit} variant="wine" className="w-full">Enviar</Button>
          </div>

          {datosEnviados && (
            <div className="mt-6 text-center">
              <p className="text-green-700 font-semibold">Datos enviados correctamente.</p>
              <Button onClick={handleFakePayment} variant="wine" className="mt-4 w-full">Simular Pago</Button>
              <Button onClick={limpiarFormulario} variant="outline-wine" className="mt-2 w-full">Volver al carrito</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormPaymentFake;
