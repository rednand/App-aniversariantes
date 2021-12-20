import React, { Component } from "react";
import styled from "styled-components";

const SectionFooter = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  flex-shrink: 0;
  margin-top: auto;
  position: relative;
  bottom: 0;
`;
const FooterLeft = styled.div`
  width: 25%;
  margin: 5%;
`;
const FooterCenter = styled.div`
  width: 40%;
  height: 1.2rem;
  text-align: center;
  font-weight: bold;
  padding: 1%;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    border-bottom: 3px solid #000000;
  }
`;

const Nava = styled.a`
  text-decoration: none;
  color: #000000;

  &:disabled {
    color: #000000;
    cursor: pointer;
  }

  &:active {
    color: #c0dbde;
    cursor: pointer;
  }

  &:visited {
    color: #000000;
  }
`;

const FooterRight = styled.div`
  width: 25%;
  margin: 5%;
`;

class Footer extends Component {
  render() {
    return (
      <SectionFooter>
        <FooterLeft>
          <p>grupo p3</p>
        </FooterLeft>
        <FooterCenter className="footer-center">
          <p>
            <Nava href="#topo">Voltar ao topo</Nava>
          </p>
        </FooterCenter>
        <FooterRight className="footer-right">
          <p>© grupo p3, Inc. 2021. Grupo Multiplica</p>
        </FooterRight>
      </SectionFooter>
    );
  }
}

export default Footer;
