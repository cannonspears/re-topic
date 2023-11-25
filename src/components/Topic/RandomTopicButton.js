import React from "react";
import Button from "@mui/material/Button";

function RandomTopicButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick} fullWidth>
      Random Topic
    </Button>
  );
}

export default RandomTopicButton;
