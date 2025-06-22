// src/pages/FormPayment.jsx
import React from "react";
import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import usePaymentForm from "../hooks/usePaymentForm";
import { formatCardNumber } from "../utils/validator";
import TitleH2 from "../components/TitleH2";
import SpanText from "../components/SpanText";
import CardResumen from "../components/CardResumen";
import TitleH1 from "../components/TitleH1";
import ProgressBar from "../components/ProgressBar";

const FormPayment = () => {
  const {
    formData,
    handleChangeData,
    handleChangeTarjeta,
    formDataTarjeta,
    limpiarFormulario,
    handleFirstStep,
    handleFinishPayment,
    step,
    setStep,
  } = usePaymentForm();

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-200 to-red-300 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <TitleH1 text="Pago con Tarjeta Real" />
            <ProgressBar step={step} color="wine" />
          </div>

          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200">
              <div className="text-center mb-6">
                <TitleH2 label="Datos del Cliente" color="wine" />
                <SpanText text="Rellena tus datos para proceder con el pago real." />
              </div>
              <div className="space-y-6">
                <InputField id="nombre" name="nombre" value={formData.nombre} onChange={handleChangeData} type="text" label="Nombres" placeholder="Claudia María" required />
                <InputField id="apellido" name="apellido" value={formData.apellido} onChange={handleChangeData} type="text" label="Apellidos" placeholder="Hernández Ortega" required />
                <InputField id="email" name="email" value={formData.email} onChange={handleChangeData} type="email" label="Correo Electrónico" placeholder="correo@ejemplo.com" required />
                <InputField id="monto" name="monto" value={formData.monto} onChange={handleChangeData} type="number" label="Monto" placeholder="0.00" min="0" step="0.01" required />
                <div className="pt-4">
                  <Button onClick={handleFirstStep} variant="wine" className="w-full text-lg">Siguiente</Button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <CardResumen formData={formData} theme="wine" />
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200">
                <TitleH2 label="Detalles de la Tarjeta" color="wine" />
                <div className="space-y-6">
                  <InputField id="numeroTarjeta" name="numeroTarjeta" value={formatCardNumber(formDataTarjeta.numeroTarjeta)} onChange={handleChangeTarjeta} type="text" label="Número" placeholder="1234 5678 9012 3456" required />
                  <div className="grid grid-cols-3 gap-4">
                    <InputField id="mesVencimiento" name="mesVencimiento" value={formDataTarjeta.mesVencimiento} onChange={handleChangeTarjeta} type="number" label="Mes" placeholder="MM" min="1" max="12" required />
                    <InputField id="anioVencimiento" name="anioVencimiento" value={formDataTarjeta.anioVencimiento} onChange={handleChangeTarjeta} type="number" label="Año" placeholder="YYYY" min={new Date().getFullYear()} required />
                    <InputField id="cvv" name="cvv" value={formDataTarjeta.cvv} onChange={handleChangeTarjeta} type="text" label="CVV" placeholder="123" required />
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button onClick={() => setStep(1)} variant="outline-wine" className="flex-1">← Atrás</Button>
                    <Button onClick={handleFinishPayment} variant="wine" className="flex-1">Pagar</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200 text-center">
              <h2 className="text-3xl font-bold text-red-600 mb-4">¡Pago Exitoso!</h2>
              <p className="text-gray-700 mb-6">Tu transacción ha sido procesada correctamente.</p>
              <Button onClick={limpiarFormulario} variant="wine" className="w-full">Volver al carrito</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormPayment;
