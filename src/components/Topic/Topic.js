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
    <div>
      <Typography sx={{ fontSize: { xs: ".7rem" } }}>
        <h1>{topic}</h1>
        {showDetails && <Details script={script} id={id} />}
      </Typography>
      <Button
        variant={clickableButton}
        onClick={showDetailsHandler}
        title={`${buttonText} Details`}
        textAlign="center"
      >
        {buttonText} Details
      </Button>
    </div>
  );
}

export default Topic;
