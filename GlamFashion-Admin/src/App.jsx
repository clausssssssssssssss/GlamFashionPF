import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Nav from "./components/Nav";

// Páginas
import PrimerUso from './pages/PrimerUso';
import LoginAdmin from './pages/LoginAdmin';
import RecuperarContraseña1 from './pages/RecuperarContraseña1';
import RecuperarContraseña2 from './pages/RecuperarContraseña2';
import RecuperarContraseña3 from './pages/RecuperarContraseña3';
import Dashboard from './pages/Dashboard';
import Productos from './pages/Productos';
import GraficosProductos from './pages/GraficosProductos';
import Categorias from './pages/Categorias';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';
import Administradores from './pages/Administradores';
import PerfilAdmin from './pages/PerfilAdmin';
import EditarPerfilAdmin from './pages/EditarPerfilAdmin';

function App() { 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/PrimerUso" element={<PrimerUso />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/RecuperarContraseña1" element={<RecuperarContraseña1 />} />
        <Route path="/RecuperarContraseña2" element={<RecuperarContraseña2 />} />
        <Route path="/RecuperarContraseña3" element={<RecuperarContraseña3/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/GraficosProductos" element={<GraficosProductos/>} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Proveedores" element={<Proveedores />} />
        <Route path="/Administradores" element={<Administradores />} />
        <Route path="/PerfilAdmin" element={<PerfilAdmin />} />
        <Route path="/EditarPerfilAdmin" element={<EditarPerfilAdmin/>} />
      </Routes>
      </Router>
    </>
  );
};


export default App;
