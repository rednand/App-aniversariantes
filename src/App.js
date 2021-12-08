import React, { Component } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./assets/index.css";
import "./assets/App.css";
import FelizAniversario from "./components/FelizAniversario/Felizaniversario";
import Cards from "./components/Cards/Cards";

class App extends Component {

  render() {
   

    return (
      <section>
        <Header />
        <FelizAniversario />
        <Cards />
        <Footer />
      </section>
    );
  }
}

export default App;
