import React, { Component } from "react";
import "./style.css";
import { Typography } from "@material-ui/core";


class Nav extends Component {
  render() {
    return (
      <>
        <Typography  className="header-nav">
          <ul>
            <li>
              <a className="nav-a" href="busca.html">
                Buscar cadastro
              </a>
            </li>
            <li>
              <a className="nav-a" href="editar-cadastro.html">
                Editar cadastro
              </a>
            </li>
            <li>
              <a href="cadastro.html">
                <button> Cadastre-se</button>
              </a>
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
      </>
    );
  }
}

export default Nav;
