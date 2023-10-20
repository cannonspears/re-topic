import React, { useState } from "react";
import Details from "./Details";

function Topic({ currentTopic }) {
  const [showDetails, setShowDetails] = useState(false);

  const { topic, id, script } = currentTopic;

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  let buttonText = showDetails ? "Hide" : "Show";

  return (
    <React.Fragment>
      <blockquote>
        <h1>{topic}</h1>
        {showDetails && <Details script={script} id={id} />}
      </blockquote>

      <button
        onClick={showDetailsHandler}
        className="detailsButton"
        title={`${buttonText} Details`}
      >
        {buttonText} Details
      </button>
    </React.Fragment>
  );
}

export default Topic;
