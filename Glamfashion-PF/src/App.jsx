// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";

// Páginas
import PrimeraVista from "./pages/PrimeraVista";
import IniciarSesion from "./pages/IniciarSesion";
import CrearCuenta from "./pages/Crearcuenta";
import EditarPerfil from "./pages/EditarPerfil";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Vestidos from "./pages/Vestidos";
import QuienesSomos from "./pages/QuienesSomos";
import Terminosycondiciones from "./pages/Terminosycondiciones";
import CarritoDeCompras from "./pages/Carritodecompras";
import Payment from "./pages/FormPayment";
import PaymentFake from "./pages/FormPaymentFake";
import Tops from "./pages/Tops";
import Skirts from "./pages/Skirts";
import Pants from "./pages/Pants";
import Shirts from "./pages/Shirts";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PrimeraVista />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/EditarPerfil" element={<EditarPerfil />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Vestidos" element={<Vestidos />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Terminosycondiciones" element={<Terminosycondiciones />} />
        <Route path="/Carritodecompras" element={<CarritoDeCompras />} />
        <Route path="/FormPayment" element={<Payment />} />
        <Route path="/FormPaymentFake" element={<PaymentFake />} />
        <Route path="/Tops" element={<Tops />} />
        <Route path="/Skirts" element={<Skirts />} />
        <Route path="/Pants" element={<Pants />} />
        <Route path="/Shirts" element={<Shirts />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
