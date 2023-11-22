import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft } from "react-icons/hi";
import Button from "@mui/material/Button";

function PreviousCategoryButton({ onClick }) {
  return (
    <Button variant="outlined" onClick={onClick} title="Previous Category">
      Previous
    </Button>
  );
}

export default PreviousCategoryButton;
