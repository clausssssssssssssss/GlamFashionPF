import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Nav from "./components/Nav";

// Páginas
import PrimeraVista from './pages/PrimeraVista';
import IniciarSesion from './pages/IniciarSesion';
import CrearCuenta from './pages/Crearcuenta';
import EditarPerfil from './pages/EditarPerfil';
import Inicio from './pages/Inicio';
import MetododePago from './pages/MetododePago';
import Perfil from './pages/Perfil';
import Vestidos from './pages/Vestidos';
import QuienesSomos from './pages/QuienesSomos';
import Terminosycondiciones from './pages/Terminosycondiciones';
import CarritoDeCompras from './pages/Carritodecompras';

function App() { 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/PrimeraVista" element={<PrimeraVista />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/EditarPerfil" element={<EditarPerfil />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/MetododePago" element={<MetododePago />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Vestidos" element={<Vestidos />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Terminosycondiciones" element={<Terminosycondiciones />} />
        <Route path="/Carritodecompras" element={<CarritoDeCompras />} />
      </Routes>
      </Router>
    </>
  );
};


export default App;
