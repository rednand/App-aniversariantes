import styled from "styled-components";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import Cards from "../Cards/Cards";

const Main = styled.div`
  width: 100%;
  height: 50rem;

  min-height: 50rem;

  @media (min-width: 769px) and (max-width: 1204px) {
    min-height: 35rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    min-height: 45rem;
    background-position: 95% 10%;
    min-height: 35rem;
  }

  @media (max-width: 481px) {
    width: 100%;
    min-height: 45rem;
  }
`;

const Search = styled.section`
  width: 80%;
  color: #ffffff;

  margin: 3% auto;
  text-align: start;
  font-size: 1.7rem;
  font-weight: bold;

  @media (min-width: 769px) and (max-width: 1204px) {
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    font-size: 1.5rem;
    margin-top: 12%;
  }

  @media (max-width: 481px) {
    text-align: center;
    font-size: 1.3rem;
    margin-top: 15%;
  }
`;

const Select = styled.select`
  color: #ffffff;

  margin-top: 5%;
  font-family: Helvetica;
  width: auto;
  border: none;
  font-weight: bold;
  border-bottom: 3px solid #ffffff;
  background-color: rgb(235, 157, 157, 0.01);
  font-size: 1.3rem;

  @media (max-width: 481px) {
    font-size: 1rem;
  }
`;

const Option = styled.option`
  background-color: #000000;

  color: #c0dbde;

  &:checked {
    background-color: #c0dbde;
    color: #000000;
  }
`;

const Input = styled.input`
  margin: 1% 0;
  width: 40%;
  height: 2rem;

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 2% 0;
    width: 70%;
  }

  @media (max-width: 481px) {
    margin: 10% 0 auto;
    width: 95%;
    height: 1.6rem;
  }
`;

const Button = styled.button`
  width: 9rem;
  height: 2.4rem;
  margin: 1%;
  background-color: #000000;
  border: none;
  color: #c0dbde;
  font-size: 1.2rem;
  background-color: #000000;

  &:hover {
    color: #000000;
    cursor: pointer;
    background-color: rgb(235, 157, 157);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 1% 0;
    width: 30%;
  }

  @media (max-width: 481px) {
    height: 2rem;
    font-size: 1.2rem;
  }
`;

const Loading = styled.div`
  margin: 5% 0;
  font-size: 3rem;
  color: #ffffff;

  @media (min-width: 769px) and (max-width: 1204px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 10%;
    font-size: 2rem;
  }

  @media (max-width: 481px) {
    margin: 30% 0;
    font-size: 1.5rem;
  }
`;

function BuscarCadastro() {
  const isBackgroundRed = true;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("posts").then(({ data }) => {
      setMovies(data);
    });
    console.log(movies);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useState(false);

  const MostraDiv = () => setLoading(true);

  return (
    <Main className={isBackgroundRed ? "red" : "white"}>
      <Search class="search">
        <div>
          <label for="search">
            Buscar pessoa por:
            <Select name="nome" id="select">
              <Option selected="selected" value="nome">
                Nome
              </Option>
              <Option value="data">Data de Nascimento</Option>
            </Select>
          </label>
          <div>
            <Input
              type="text"
              name="input-busca"
              placeholder="Busque pessoa pelo nome"
            />
            <Button>Buscar</Button>
          </div>
          <Loading >
            {loading ? "Carregando pessoas cadastradas" : null}
          </Loading>
          <div id="section-busca">
            {movies.map((movie) => (
              <Cards onLoad={MostraDiv}
                key={movie.id}
                //   id={movie.id}
                desc={movie.name}
                //   foto={movie.show.image.medium}
              />
            ))}
          </div>
        </div>
      </Search>
    </Main>
  );
}

export default BuscarCadastro;
