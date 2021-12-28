import React from "react";
import styled from "styled-components";

const SegundaSection = styled.div`
  width: 80%;
  margin: 5% 10%;
`;

const Card = styled.div` 
width: 20%;
height: 25rem;
float: left;
background-color: #ffffff;
margin: 2% 2.5%;
position: relative;
box-shadow: 5px 5px 5px black;
transition: 1s;

&:hover {
  transform: scale(1.1);
  transition: all .3s;
  box-shadow: 15px 25px 50px black;
`;

const DescricaoPhoto = styled.p`
  font-family: "Apercu Mono Pro Regular";
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 10% 0;
  text-align: start;
  position: absolute;
  top: 88%;
  left: 5%;
`;

const Img = styled.img`
  position: absolute;
  width: 90%;
  height: 20rem;
  top: 5%;
  left: 5%;
  object-fit: cover;
  object-position: 50% 10%;
`;

const BodyCard = styled.p`
  position: absolute;
  width: 90%;
  height: 20rem;
  top: 10%;
  margin: 5%;
  object-fit: cover;
  object-position: 50% 10%;
  font-size: 1rem;
`;

function Cards({ desc, foto, pBody }) {
  return (
    <SegundaSection>
      <Card
        direction="row"
        className="card"
        component="div"
        justifyContent="space-around"
        alignContent="space-around"
      >
        <DescricaoPhoto>{desc}</DescricaoPhoto>
        <Img src={foto} alt=" " />
        <BodyCard>{pBody}</BodyCard>
      </Card>
    </SegundaSection>
  );
}

export default Cards;
