import React, { Component } from "react";
import Logo from '../../assets/img/logo.png'
import Nav from "../Nav/nav";
import "./style.css"


class Header extends Component {
  render() {
    return (
        <header id="topo" >
          <div className="header-logo">
            <a href="https://grupomultiplica.com.br/">
              <img src={Logo} alt=""/>
            </a>
          </div>
        <Nav/>
        </header>
    );
  }
}

export default Header;
