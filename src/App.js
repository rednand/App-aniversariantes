import React from "react";
import "./assets/index.css";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BuscarCadastro from "./components/pages/BuscarCadastro";
import Contato from "./components/pages/Contato";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/"></Route>
        <Route element={<Contato />} path="/contato"></Route>
        <Route element={<BuscarCadastro />} path="/buscar"></Route>
      </Routes>
    </Router>
  );
}

export default App;
