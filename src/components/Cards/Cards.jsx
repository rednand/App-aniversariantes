import React, { Component } from "react";
import Logo from "../../assets/img/disposicao-da-vista-superior-com-um-cartao-emoji-sorridente_23-2148860301.jpg";
import "./style.css";
import api from "../services/api";

class Cards extends Component {
  state = { filmes: [], };

  async componentDidMount() {
  const response = await api.get("star%20wars");
  console.log(response.data);
this.setState({ filmes: response.data });
 }

  render() {
    console.log(this.state);
    return (
      <div>
         
        <h1>Listar filmes</h1>
        {this.state.filmes.forEach((filme) => (
          <div className="second-section">
            <div className="card">
              <li key={filme.show.id}>
                <h2>
                  <strong>Título: </strong>
                  {filme.show.name}
                  {filme.show}
                </h2>
                <p>{filme.show.url}</p>
              </li>
              <img className="img" src={Logo} alt=" " />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
