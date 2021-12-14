import React, { Component } from "react";
import "./style.css";
import { Grid } from "@material-ui/core";

function Cards({ desc, foto }) {
  return (
    <Grid
      direction="row"
      className="card"
      component="div"
      justifyContent="space-around"
      alignContent="space-around"
    >
      <p className="description-photo">{desc}</p>
      <img className="img" src={foto} alt=" " />
    </Grid>
  );
}

export default Cards;
