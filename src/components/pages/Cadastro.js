import React from "react";
import styled from "styled-components";

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
`;
const CadastroSection = styled.section`
  padding: 10%;
`;

const Cadastro = () => {
  return (
    <Main>
      <CadastroSection>
        <section>
          <h1>CADASTRO</h1>
        </section>
        <section class="form-section">
          <form id="form" method="post" action="./busca.html">
            <div>
              <input
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
              <input
                name="cpf"
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
              <input
                placeholder="Insira sua data de nascimento"
                data-tipo="date"
                type="text"
                id="datebirth"
                name="date"
                onfocus="typeTextToDate()"
                onblur="typeDateToText()"
                required
                data-data
              />
              <span class="input-mensagem-erro"></span>
            </div>
            <div>
              <input
                type="email"
                id="email"
                data-tipo="email"
                placeholder=" Insira seu e-mail:"
                name="email"
                data-email
              />
              <span class="input-mensagem-erro"></span>
            </div>
            <input
              type="file"
              accept="image/*"
              id="image"
              placeholder=" Selecione uma foto do seu dispositivo"
              name="image"
              data-foto
            />
            <div id="div-termo">
              {" "}
              <input type="checkbox" id="termo" name="termo" required />
              <label for="termo">
                Declaro que aceito enviar meus{" "}
                <strong href="">dados pessoais</strong>.
              </label>
            </div>
            <div id="captcha">
              <div class="math">
                <span id="valor1"></span>
                <span> + </span>
                <span id="valor2"></span>
                <span> =</span>
                <input
                  id="totalvalores"
                  type="text"
                  name="totalvalores"
                  required="required"
                  placeholder="digite a soma"
                />
              </div>
              <button id="enviarcaptcha" type="submit">
                Validar
              </button>
            </div>
            <p id="aviso"></p>

            <input type="submit" value="Enviar" name="Enviar" />
          </form>
        </section>
      </CadastroSection>
    </Main>
  );
};

export default Cadastro;
