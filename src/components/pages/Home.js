import React, { useState, useEffect } from "react";
import FelizAniversario from "../FelizAniversario/Felizaniversario";
import Cards from "../Cards/Cards";
import api from "../services/api";



function Home() {
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
      <FelizAniversario />
      {filmes.map((filme) => (
        <Cards
          key={filme.id}
          id={filme.id}
          desc={filme.show.name}
          foto={filme.show.image.medium}
        />
      ))}
    
    </section>
  );
}

export default Home;
