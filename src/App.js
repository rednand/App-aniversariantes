import React from "react";
import "./assets/index.css";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BuscarCadastro from "./components/pages/Busca/BuscarCadastro";
import Contato from "./components/pages/Contato";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact element={<Home />} path="/"></Route>
        <Route element={<Contato />} path="/editar"></Route>
        <Route element={<BuscarCadastro />} path="/buscar"></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
