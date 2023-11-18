import React from "react";

function Details({ script, id }) {
  const lines = script.body.split("\n").map((newLine, index) => <p key={index}>{newLine}</p>);

  return (
    <div>
      <p>{script.hook}</p>
      {lines}
      <p>{script.cta}</p>
      <div>Topic ID {id}</div>
    </div>
  );
}

export default Details;
