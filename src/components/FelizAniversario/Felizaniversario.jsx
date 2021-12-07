import React, { Component } from "react";
import "./style.css";

class FelizAniversario extends Component {
  render() {
    return (
      <div className="first-section">
        <div className="data">Data de hoje</div>
        <div className="div-mensagem">
          <p className="p-feliz">Feliz</p>
          <p className="p-aniversario">aniversário </p>
        </div>
      </div>
    );
  }
}

export default FelizAniversario;
