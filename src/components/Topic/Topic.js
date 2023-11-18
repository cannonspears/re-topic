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
    <div>
      <h1>{topic}</h1>
      {showDetails && <Details script={script} id={id} />}
      <button onClick={showDetailsHandler} title={`${buttonText} Details`}>
        {buttonText} Details
      </button>
    </div>
  );
}

export default Topic;
