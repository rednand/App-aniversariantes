import React, { Component } from "react";
import Logo from "../../assets/img/logo.png";
import Nav from "./Nav/nav";
import styled from "styled-components";

const Topo = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  overflow: visible;
  z-index: 5;
  display: inline-flex;
  justify-content: space-between;
  padding: 0.9% 0;
  background-color: #c0dbde;
`;
const HeaderLogo = styled.div`
  margin-left: 2%;
  width: 48%;
`;

class Header extends Component {
  render() {
    return (
      <Topo className="topo">
        <HeaderLogo className="header-logo">
          <a href="https://grupomultiplica.com.br/">
            <img src={Logo} alt="" />
          </a>
        </HeaderLogo>
        <Nav />
      </Topo>
    );
  }
}

export default Header;
