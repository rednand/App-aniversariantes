import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import ImagemDefault from "../../assets/img/disposicao-da-vista-superior-com-um-cartao-emoji-sorridente_23-2148860301.jpg";

const Main = styled.main`
  height: 110vh;
  background: -webkit-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -webkit-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: -o-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -o-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: -moz-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%),
    -moz-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
  background: linear-gradient(-10deg, #ffffff 50%, #c0dbde 50%);
`;

const TituloH1 = styled.h1`
  padding: 7% 5%;
  text-align: start;
  font-size: 2rem;
`;

const BuscaCPF = styled.section`
  margin: 1% 5%;
  text-align: start;
`;

const BotaoBusca = styled.button`
  width: 10%;
  margin: auto 2%;
  height: 2.6rem;
  border: none;
  color: #c0dbde;
  font-size: 1.2rem;
  background-color: #000000;

  &:hover {
    color: #000000;
    cursor: pointer;
    background-color: rgb(235, 157, 157);
  }
`;

const MostraInfos = styled.section`
  display: block;
  position: relative;
`;

const Card = styled.div`
  margin: 0% 5%;
  width: 40%;
  height: 20rem;
  box-shadow: 0px 0px 0px black;
  transition: none;
  border: 20px solid #c0dbde;
  position: relative;
  box-shadow: inset 0 0 0 20px #ffffff;

  &:hover {
    transform: none;
    transition: none;
  }
`;

const Imagem = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  height: 18rem;
  width: 80%;
  object-fit: cover;
  background-image: url(${ImagemDefault});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 5% 50%;
`;

const Descricao = styled.div`
  width: 40%;
  margin: 5% 56%;
`;

const DescricaoP = styled.p`
  margin: 2%;
  margin-left: -15%;
  word-wrap: break-Word;
  font-size: 1rem;
  font-weight: bold;
  max-width: 100%;
`;

const TituloH2 = styled.h2`
  margin: 5%;
  font-size: 1.5rem;
`;

const Exclusao = styled.button`
  position: absolute;
  left: 5%;
  top: 90%;
  width: 40%;
  height: 2.5rem;
  border: none;
  color: #c0dbde;
  font-size: 1.2rem;
  background-color: #000000;
`;

const FormSection = styled.div`
  width: 40%;
  float: right;
  margin-right: 10%;
  margin-top: -15%;
`;

function Editar() {
  const [cpf, setCPF] = useState("");
  const [nome, setNome] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <Main>
      <section>
        <TituloH1>Buscar cadastro para alteração:</TituloH1>
      </section>
      <BuscaCPF>
        <div>
          <TextField
            variant="standard"
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
          <BotaoBusca>Buscar</BotaoBusca>
        </div>
      </BuscaCPF>
      <MostraInfos>
        <Card>
          <Descricao>
            <DescricaoP>Nome:</DescricaoP>
            <DescricaoP> </DescricaoP>
            <DescricaoP></DescricaoP>
          </Descricao>
          <Imagem src={ImagemDefault} alt="erro" />
        </Card>
      </MostraInfos>
      <Exclusao>Excluir cadastro</Exclusao>
      <FormSection className="form-section-editar">
        <form className="form-editar" method="put">
          <TituloH2>Alterar dados do cadastro:</TituloH2>
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
              fullWidth
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
              fullWidth
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
              fullWidth
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
            fullWidth
          />
          <input
            className="enviar"
            type="submit"
            value="Enviar"
            name="Enviar"
          />
        </form>
      </FormSection>
    </Main>
  );
}

export default Editar;
