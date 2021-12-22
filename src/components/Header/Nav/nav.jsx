import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  width: 48%;
  text-align: end;
`;
const HeaderNavLi = styled.li`
  display: inline-flex;
  padding-right: 2%;

  .nav-a {
    margin: 1% auto;
    text-decoration: none;
    font-weight: 600;
    color: #000000;
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
  }

  &:hover .nav-a {
    border-bottom: 3px solid #000000;
  }
`;

const Botao = styled.button`
  font-weight: bold;
  font-size: 1.2rem;
  height: 2.5rem;
  color: #000000;
  background-color: #c0dbde;
  border: 3px solid #000000;

  &:hover {
    color: #c0dbde;
    background-color: #000000;
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.1);
  }

  &:active {
    color: #c0dbde;
    background-color: #000000;
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.1);
  }
`;

const Dropdown = styled.li`
  display: none;
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #c0dbde;
  min-width: 10rem;
  position: absolute;
  right: -15%;
  top: 100%;

  &:hover {
    display: block;
  }
`;

const DropdownContentA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;

  &:hover {
    background-color: #000000;
    display: block;
    color: #c0dbde;
  }
`;

function Nav() {
  return (
    <Header>
      <Typography>
        <ul>
          <HeaderNavLi>
            <Link className="nav-a" to="/buscar">
              Buscar cadastro
            </Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link className="nav-a" to="/editar">
              Editar cadastro
            </Link>
          </HeaderNavLi>
          <HeaderNavLi>
            <Link className="" to="/cadastro">
              <Botao> Cadastre-se</Botao>
            </Link>
          </HeaderNavLi>
          <Dropdown>
            <a className="dropbtn"></a>
            <DropdownContent>
              <DropdownContentA href="busca.html">
                Buscar cadastro
              </DropdownContentA>
              <DropdownContentA href="editar-cadastro.html">
                Editar cadastro
              </DropdownContentA>
              <DropdownContentA href="cadastro.html">
                {" "}
                Cadastre-se
              </DropdownContentA>
            </DropdownContent>
          </Dropdown>
        </ul>
      </Typography>
    </Header>
  );
}

export default Nav;
