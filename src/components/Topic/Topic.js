import React, { useState } from "react";
import Details from "./Details";

function Topic({ currentTopic }) {
  const [showDetails, setShowDetails] = useState(false);

  const { topic, id, script } = currentTopic;

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  let buttonText = showDetails ? "Hide" : "Show";
  let buttonColor = showDetails ? "secondary" : "primary";

  return (
    <React.Fragment>
      <h1>{topic}</h1>
      {showDetails && <Details script={script} id={id} />}

      <button
        onClick={showDetailsHandler}
        className={`btn btn-sm btn-${buttonColor}`}
        title={`${buttonText} Details`}
      >
        {buttonText} Details
      </button>
    </React.Fragment>
  );
}

export default Topic;
