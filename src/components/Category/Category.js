import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

function Category({ previousClick, nextClick, currentCategory }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" pt={2}>
      <Button variant="outlined" onClick={previousClick} title="Previous Category">
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Typography>{currentCategory.name}</Typography>
      <Button variant="outlined" onClick={nextClick} title="Next Category">
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Stack>
  );
}

export default Category;
