import React from "react";
function BuscarCadastro() {
  return (
    <div><main>
        <section class="search">
            <div>
                <label for="search">Buscar pessoa por:
                    <select name="nome" id="select">
                        <option selected="selected"  value="nome">Nome</option>
                        <option value="data">Data de Nascimento</option>
                    </select>
                </label>
                <div>
                    <input type="text" name="input-busca" id="input-busca" placeholder="Busque pessoa pelo nome"/>
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

export default BuscarCadastro;
