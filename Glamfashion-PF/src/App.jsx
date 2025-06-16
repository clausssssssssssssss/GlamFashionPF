import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Nav from "./components/Nav";


// Páginas
import PrimeraVista from './pages/PrimeraVista';
import IniciarSesion from './pages/IniciarSesion';
import CrearCuenta from './pages/Crearcuenta';
import EditarPerfil from './pages/EditarPerfil';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';
import Vestidos from './pages/Vestidos';
import QuienesSomos from './pages/QuienesSomos';
import Terminosycondiciones from './pages/Terminosycondiciones';
import CarritoDeCompras from './pages/Carritodecompras';
import Tops from './pages/Tops';
import Skirts from './pages/Skirts';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';


function App() { 
 
return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<PrimeraVista />} />
        <Route path="/PrimeraVista" element={<PrimeraVista />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/EditarPerfil" element={<EditarPerfil />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Vestidos" element={<Vestidos />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Terminosycondiciones" element={<Terminosycondiciones />} />
        <Route path="/Carritodecompras" element={<CarritoDeCompras />} />
        <Route path="/Tops" element={<Tops />} />
        <Route path="/Skirts" element={<Skirts />} />
        <Route path="/Pants" element={<Pants />} />
        <Route path="/Shirts" element={<Shirts />} />

      </Routes>
      </Router>
    </>
  );
};


export default App;
