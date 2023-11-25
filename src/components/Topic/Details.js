import React from "react";
import { Typography } from "@mui/material";

function Details({ script, id }) {
  const lines = script.body.split("\n").map((newLine, index) => <p key={index}>{newLine}</p>);

  return (
    <Typography textAlign="left" px={12}>
      <p>{script.hook}</p>
      {lines}
      <p>{script.cta}</p>
      <div>Topic ID {id}</div>
    </Typography>
  );
}

export default Details;
