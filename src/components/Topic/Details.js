import React from "react";
import { Typography } from "@mui/material";

function Details({ script, id }) {
  let lines = "";
  if (script) {
    lines = script.body.split("\n").map((newLine, index) => <p key={index}>{newLine}</p>);
  } else {
    lines = "";
  }

  return (
    <Typography textAlign="left" pb={2}>
      {script ? (
        <div>
          <p>{script.hook}</p>
          {lines}
          <p>{script.cta}</p>
          <strong>Topic ID {id}</strong>
        </div>
      ) : (
        <div>{lines}</div>
      )}
    </Typography>
  );
}

export default Details;
