import React from "react";

function Details({ script, id }) {
  const lines = script.body.split("\n").map((newLine, index) => <p key={index}>{newLine}</p>);

  return (
    <React.Fragment>
      {/* <h2>Hook</h2> */}
      <p>{script.hook}</p>
      {/* <h2>Body</h2> */}
      {lines}
      {/* <h2>Call to Action</h2> */}
      <p>{script.cta}</p>
      <div className="topicId">Topic ID {id}</div>
    </React.Fragment>
  );
}

export default Details;
