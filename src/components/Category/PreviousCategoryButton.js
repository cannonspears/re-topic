import React from "react";
import Button from "@mui/material/Button";

function PreviousCategoryButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick} title="Previous Category">
      Previous
    </Button>
  );
}

export default PreviousCategoryButton;
