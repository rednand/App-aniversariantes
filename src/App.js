import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./assets/index.css";
import "./assets/App.css";
import FelizAniversario from "./components/FelizAniversario/Felizaniversario";
import Cards from "./components/Cards/Cards";
import api from "./components/services/api";


function App() {
  const [filmes, setVideos] = useState([]);

  useEffect(() => {
    api.get("star%20wars").then(({ data }) => {
      setVideos(data);
    });
    console.log(filmes);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(filmes);

  return (
    <section>
      <Header />
      <FelizAniversario />
      {filmes.map((filme) => (
        <Cards key={filme.id} id={filme.id} desc={filme.show.name} foto={filme.show.image.medium}/>
      ))}
      <Footer />
    </section>
  );
}

export default App;
