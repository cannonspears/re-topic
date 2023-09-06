import React from "react";

function RealEstate({ topic }) {
  return (
    <div className="topic">
      <div className="category" title="Real Estate">
        Real Estate
      </div>
      <blockquote>{topic}</blockquote>;
      <button className="next" title="Next Topic">
        Next Topic
      </button>
    </div>
  );
}

export default RealEstate;
