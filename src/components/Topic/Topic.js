import React, { useState } from "react";
import Details from "./Details";
import Button from "@mui/material/Button";

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
      <Button variant="contained" onClick={showDetailsHandler} title={`${buttonText} Details`}>
        {buttonText} Details
      </Button>
    </div>
  );
}

export default Topic;
