import React from "react";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";
import Button from "@mui/material/Button";

function NextCategoryButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick} title="Next Category">
      Next
    </Button>
  );
}

export default NextCategoryButton;
