import React from "react";

function Details({ script, id }) {
  const lines = script.body.split("\n").map((newLine, index) => (
    <p className="m-0" key={index}>
      {newLine}
    </p>
  ));

  return (
    <div>
      <p className="mb-2">{script.hook}</p>
      {lines}
      <p className="mt-2">{script.cta}</p>
      <div>Topic ID {id}</div>
    </div>
  );
}

export default Details;
