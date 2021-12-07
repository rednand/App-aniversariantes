import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <section className="section-footer">
        <div className="footer-left">
          <p>grupo p3</p>
        </div>
        <div className="footer-center">
          <p>
            <a href="#topo">Voltar ao topo</a>
          </p>
        </div>
        <div className="footer-right">
          <p>© grupo p3, Inc. 2021. Grupo Multiplica</p>
        </div>
      </section>
    );
  }
}

export default Footer;