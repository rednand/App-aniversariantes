import React from "react";
import "./assets/index.css";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BuscarCadastro from "./components/pages/Busca/BuscarCadastro";
import Editar from "./components/pages/Editar/Editar";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Pagina404 from "./components/pages/Pagina404";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route exact element={<Home />} path="/"></Route>
        <Route element={<Editar />} path="/editar"></Route>
        <Route element={<BuscarCadastro />} path="/buscar"></Route>
        {/* <Route element={<Pagina404 />} ></Route> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
