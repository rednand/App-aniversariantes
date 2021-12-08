import React, { Component } from "react";
import "./style.css";

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

class FelizAniversario extends Component {
  render() {
    return (
      <div className="first-section">
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
      </div>
    );
  }
}

export default FelizAniversario;
