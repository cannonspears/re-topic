import React from "react";
import Button from "@mui/material/Button";

function Category({ previousClick, nextClick, currentCategory }) {
  return (
    <div>
      <Button variant="outlined" onClick={previousClick} title="Previous Category">
        Previous
      </Button>
      <div>{currentCategory.name}</div>
      <Button variant="outlined" onClick={nextClick} title="Next Category">
        Next
      </Button>
    </div>
  );
}

export default Category;
