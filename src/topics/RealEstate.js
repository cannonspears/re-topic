import React from "react";

function RealEstate({ topic }) {
  return (
    <div className="topic">
      <div className="category" title="Real Estate">
        Real Estate
      </div>
      <blockquote>{topic}</blockquote>
      <button className="next" title="Next Category">
        Next Category
      </button>
    </div>
  );
}

export default RealEstate;
