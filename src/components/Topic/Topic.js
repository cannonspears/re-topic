import React from "react";

function Topic({ topic, script }) {
  // TODO: Functional Script button
  // Need: Grey out and make not clickable if no script available in fetched data
  // Binary state variable to show/hide script if available
  // Change button and title text to "Show" or "Hide"

  return (
    <React.Fragment>
      <blockquote>{topic}</blockquote>
      <div className="container">
        <button className="script" title="Show Script">
          Show Script
        </button>
      </div>
    </React.Fragment>
  );
}

export default Topic;
