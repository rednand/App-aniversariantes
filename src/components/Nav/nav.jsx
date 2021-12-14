import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <Typography  className="header-nav">
        <ul>
          <li>
            <Link className="nav-a" to="/buscar">
              Buscar cadastro
            </Link>
          </li>
          <li>
            <Link className="nav-a" to="/editar">
              Editar cadastro
            </Link>
          </li>
          <li>
            <Link className="" to="/editar">
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
      </Typography>
    </div>
  );
}

export default Nav;
