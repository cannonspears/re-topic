import React from "react";

function Topic({ category, topic }) {
  return (
    <div className="topic">
      <div className="category" title={category}>
        {category}
      </div>
      <blockquote>{topic}</blockquote>
      <button className="next" title="Next Category">
        Next Category
      </button>
    </div>
  );
}

export default Topic;
