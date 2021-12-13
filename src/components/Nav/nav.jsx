import React, { Component } from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import BuscarCadastro from "../pages/BuscarCadastro";
import Contato from "../pages/Contato";
function Nav() {
  return (
    <Router>
      <Typography className="header-nav">
        <ul>
          <li>
            <Link className="nav-a" to="/buscar">
              Buscar cadastro
            </Link>
          </li>
          <li>
            <Link className="nav-a" to="/contato">
              Editar cadastro
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <button> Cadastre-se</button>
            </Link>
          </li>
          <li className="dropdown">
            <a className="dropbtn"></a>
            <div className="dropdown-content">
              <a href="busca.html">Buscar cadastro</a>
              <a href="editar-cadastro.html">Editar cadastro</a>
              <a href="cadastro.html"> Cadastre-se</a>
            </div>
          </li>
        </ul>
        <Routes>
          <Route exact element={<Home />} path="/"></Route>

          <Route element={<Contato />} path="/empresa"></Route>

          <Route element={<BuscarCadastro />} path="/buscar"></Route>
        </Routes>
      </Typography>
    </Router>
  );
}

export default Nav;
