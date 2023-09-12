import React from "react";

function Script({ script }) {
  return (
    <div className="script">
      <p>{script.hook}</p>
      <p>{script.body}</p>
      <p>{script.cta}</p>
    </div>
  );
}

export default Script;
