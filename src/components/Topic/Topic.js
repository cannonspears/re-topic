import React, { useState } from "react";
import Details from "./Details";
import { Button, Typography } from "@mui/material";

function Topic({ currentTopic }) {
  const [showDetails, setShowDetails] = useState(false);

  const { topic, id, script } = currentTopic;

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  let buttonText = showDetails ? "Hide" : "Show";
  let clickableButton = script ? "contained" : "disabled";

  return (
    <Typography>
      <h1>{topic}</h1>
      {showDetails && <Details script={script} id={id} />}
      <Button
        variant={clickableButton}
        onClick={showDetailsHandler}
        title={`${buttonText} Details`}
      >
        {buttonText} Details
      </Button>
    </Typography>
  );
}

export default Topic;
