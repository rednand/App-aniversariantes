import React, { Component } from "react";
import Logo from "../../assets/img/disposicao-da-vista-superior-com-um-cartao-emoji-sorridente_23-2148860301.jpg";
import "./style.css";

function Cards ({desc, foto}) {

  
    return (
         <div className="second-section">
            <div className="card">
              <p className="description-photo">{desc}</p>
              <img className="img" src={foto} alt=" " />
            </div>
          </div>
    );
  }


export default Cards;
