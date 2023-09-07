import React from "react";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

function Topic({ category, topic, script }) {
  // TODO: Functional Script button
  // Need: Grey out and make not clickable if no script available in fetched data
  // Binary state variable to show/hide script if available
  // Change button and title text to "Show" or "Hide"

  return (
    <div className="topic">
      <div className="container">
        <button className="category" title={category}>
          {category}
          <IconContext.Provider value={{ style: { verticalAlign: "middle", marginLeft: 10 } }}>
            <HiArrowRight />
          </IconContext.Provider>
        </button>
      </div>
      <blockquote>{topic}</blockquote>
      <div className="container">
        <button className="script" title="Show Script">
          Show Script
        </button>
      </div>
    </div>
  );
}

export default Topic;
