import React from "react";

function Contato() {
  return (
    <div>
      <main>
        <section class="search">
          <div>
            <label for="search">
              Buscar pessoa por:
           
            </label>
            <div>
              <button id="busca">Buscar</button>
            </div>
            <div id="loading">Carregando pessoas cadastradas...</div>
            <div id="section-busca"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contato;
