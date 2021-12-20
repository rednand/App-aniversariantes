import React, { Component } from "react";
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

const Data = styled.div`
  width: 100%;
  margin: 5% 0%;
  font-size: 3rem;
`;

const AniversarioDivEsquerda = styled.div`
  width: 50%;
  display: flex;

  .select-data {
    width: 60%;
    margin: auto 10%;
  }

  .select-birthday {
    padding-left: 5%;
    width: 40rem;
  }
`;

const SelectBirthday = styled.select`
  font-size: 1.6rem;
  border: 8px solid #ffffff;
  background-color: #c0dbde;
  font-family: Helvetica;
  width: 80%;
  white-space: pre-wrap;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
  height: 5rem;
`;
class SelectDiaMes extends Component {
  render() {
    return (
      <AniversarioDivEsquerda>
        <div className="select-data">
          <Data>{date}</Data>
          <SelectBirthday className="select-birthday" name="" id="">
            <option value="">Aniversariantes do dia</option>
            <option value="">Aniversariantes do mês</option>
          </SelectBirthday>
        </div>
      </AniversarioDivEsquerda>
    );
  }
}

export default SelectDiaMes;
