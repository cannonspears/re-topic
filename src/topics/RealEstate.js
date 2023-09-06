import React from "react";

function RealEstate({ topic }) {
  console.log("TOPIC", topic);
  return (
    <div className="topic">
      <div className="category" title="Real Estate">
        Real Estate
      </div>

      <blockquote>{topic}</blockquote>
    </div>
  );
}

export default RealEstate;
