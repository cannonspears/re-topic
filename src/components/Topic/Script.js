import React from "react";

function Script({ script }) {
  const lines = script.body.split("\n").map((newLine, index) => <p key={index}>{newLine}</p>);
  return (
    <div className="script">
      <p>{script.hook}</p>
      {lines}
      <p>{script.cta}</p>
    </div>
  );
}

export default Script;
