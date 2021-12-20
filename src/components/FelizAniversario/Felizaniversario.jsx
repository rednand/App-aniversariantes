import React, { Component } from "react";
import styled from "styled-components";
import SelectDiaMes from "../SelectDiaMes/SelectDiaMes";
import { keyframes } from "styled-components";

const Borda = keyframes`
0% {
  width: 0;
  height: 0;
}

25% {
  width: 48%;
  height: 5rem;
}

50% {
  width: 49%;
  height: 5.5rem;
}

100% {
  width: 50%;
  height: 6rem;
}
`;

const BorderColor = keyframes`
0% {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
}

25% {
  border-color: transparent;
}

50% {
  border-bottom-color: #000000;
  border-top-color: #ffffff;
}

100% {
  border-bottom-color: #000000;
  border-top-color: #ffffff;
}
`;

const SectionTotal = styled.div`
  width: 100%;
  height: 30rem;
  padding-top: 5%;
  box-sizing: border-box;
  z-index: unset;
  display: flex;
  background: linear-gradient(-1deg, rgba(245, 244, 244, 0) 5%, #c0dbde 70%);
  flex-direction: row;
`;

const DivMensagem = styled.div`
  width: 50%;
  border: double 20px rgba(255, 255, 255, 0.7);
  border-bottom-color: #000000;
  border-top-color: #ffffff;
  height: 6rem;
  min-height: 6rem;
  margin: 7% 5% 0 5%;
  position: relative;
  animation: ${Borda} 5s 1s ease-in-out, ${BorderColor} 10s 1s ease;

  &:after,
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 20px solid transparent;
    width: 0;
    height: 0;
  }
`;

const PFeliz = styled.p`
  font-weight: bold;
  position: absolute;
  top: -55%;
  left: 1%;
  text-shadow: 5px 5px 20px rgb(255, 255, 255);
  font-size: 9rem;
`;

const Paniversario = styled.p`
  width: auto;
  max-width: 100%;
  text-align: justify;
  font-size: 8rem;
  position: absolute;
  color: #ffffff;
  top: 20%;
  right: 1%;
  text-shadow: 5px 5px 20px rgb(0, 0, 0);
`;

class FelizAniversario extends Component {
  render() {
    return (
      <SectionTotal>
        <SelectDiaMes />
        <DivMensagem>
          <PFeliz>Feliz</PFeliz>
          <Paniversario>aniversário </Paniversario>
        </DivMensagem>
      </SectionTotal>
    );
  }
}

export default FelizAniversario;