import React, { Component } from "react";
import "./style.css";
import styled from "styled-components";

let current = new Date();
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let date = `${current.getDate()} de ${
  meses[current.getMonth()]
} de ${current.getFullYear()}`;

const AniversarioDivEsquerda = styled.div`
  width: 100%;
  height: 30rem;
  padding-top: 3%;
  box-sizing: border-box;
  z-index: unset;
  display: flex;
  background: linear-gradient(-1deg, rgba(245, 244, 244, 0) 5%, #c0dbde 70%);
  flex-direction: row;

  .select-data {
    width: 50%;
    margin: 5%;
  }
`;

class FelizAniversario extends Component {
  render() {
    return (
      <AniversarioDivEsquerda>
        <div className="select-data">
          <div className="data">{date}</div>

          <select className="select-birthday " name="" id="">
            <option value="">Aniversariantes do dia</option>
            <option value="">Aniversariantes do mês</option>
          </select>
        </div>

        <div className="div-mensagem">
          <p className="p-feliz">Feliz</p>
          <p className="p-aniversario">aniversário </p>
        </div>
      </AniversarioDivEsquerda>
    );
  }
}

export default FelizAniversario;
