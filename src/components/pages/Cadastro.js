import React from "react";
import api from "../services/api";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Main = styled.div`
  height: 110vh;
  background: -webkit-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -webkit-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: -o-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -o-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: -moz-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -moz-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: linear-gradient(-10deg, #ffffff 50%, #c0dbde 50%);
  color: #ffffff;
  font-size: 2rem;

  .input-class {
    width: 50%;
    margin: 1% auto;
  }
`;
const CadastroSection = styled.section`
  padding: 10%;
`;

const Cadastro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("posts", {
        body: e.target.nome.value,
        title: e.target.cpf.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Main>
      <CadastroSection>
        <section>
          <h1>CADASTRO</h1>
        </section>
        <section class="form-section">
          <form onSubmit={handleSubmit} id="form" method="post">
            <div>
              <TextField
                className="input-class"
                fullWidth
                name="nome"
                id="nome"
                type="text"
                id="nome"
                data-tipo="nome"
                placeholder=" Insira seu nome completo:"
                name="name"
                required
                data-nome
              />
              <span class="input-mensagem-erro"></span>
            </div>
            <div>
              <TextField
                fullWidth
                name="cpf"
                className="input-class"
                type="number"
                id="cpf"
                data-tipo="cpf"
                placeholder=" Insira seu CPF com 11 dígitos:(apenas números)"
                name="cpf"
                data-cpf
              />
              <span class="input-mensagem-erro"></span>
            </div>
            <div>
              <TextField
                type="email"
                id="email"
                className="input-class"
                fullWidth
                data-tipo="email"
                placeholder=" Insira seu e-mail:"
                name="email"
                data-email
              />
              <span class="input-mensagem-erro"></span>
            </div>
            <TextField
              type="file"
              accept="image/*"
              id="image"
              fullWidth
              className="input-class"
              placeholder=" Selecione uma foto do seu dispositivo"
              name="image"
              data-foto
            />
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </form>
        </section>
      </CadastroSection>
    </Main>
  );
};

export default Cadastro;
