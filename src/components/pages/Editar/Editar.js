import { TextField } from "@material-ui/core";
import React, { useState } from "react";

function Editar() {
  const [cpf, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <div>
      <main className="main-editar">
        <section>
          <h1>Buscar cadastro para alteração:</h1>
        </section>
        <section className="buscaCPF">
          <div>
            <TextField
              name="cpf"
              value={cpf}
              onChange={(event) => {
                setCPF(event.target.value);
              }}
              type="number"
              id="cpf"
              data-tipo="cpf"
              className="cpf"
              required
              data-cpf
              placeholder=" Insira seu CPF com 11 dígitos: (apenas números)"
            />
            <button className="busca">Buscar</button>
          </div>
        </section>
        <section className="mostra-infos">
          <div className="card-editar">
            <div className="description-editar">
              <p>Nome:</p>
              <p> </p>
              <p></p>
            </div>
            <img className="img-editar" src="" title="" alt="erro" />
          </div>
        </section>
        <button className="exclusao">Excluir cadastro</button>
        <section className="form-section-editar">
          <form className="form-editar" method="put">
            <h2>Alterar dados do cadastro:</h2>
            <div>
              <TextField
                name="nome"
                id="nome"
                type="text"
                className="nome"
                value={nome}
                onChange={(event) => {
                  setNome(event.target.value);
                }}
                data-tipo="nome"
                placeholder=" Insira seu nome completo:"
                name="name"
                required
                data-nome
              />
              <span className="input-mensagem-erro"></span>
            </div>
            <div>
              <TextField
                placeholder="Insira sua data de nascimento"
                data-tipo="date"
                type="text"
                className="datebirth"
                name="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                //onfocus="typeTextToDate()"
                // onblur="typeDateToText()"
                required
                data-data
              />
              <span className="input-mensagem-erro"></span>
            </div>
            <div>
              <TextField
                type="email"
                className="email"
                data-tipo="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder=" Insira seu e-mail:"
                name="email"
                data-email
              />
              <span className="input-mensagem-erro"></span>
            </div>
            <TextField
              accept="image/*"
              className="image"
              type="file"
              value={imagem}
              onChange={(event) => {
                setImagem(event.target.value);
              }}
              placeholder=" Selecione uma foto do seu dispositivo"
              name="image"
              data-foto
            />
            <input
              className="enviar"
              type="submit"
              value="Enviar"
              name="Enviar"
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Editar;
