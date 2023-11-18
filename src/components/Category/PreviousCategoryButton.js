import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft } from "react-icons/hi";

function PreviousCategoryButton({ onClick }) {
  return (
    <button onClick={onClick} title="Previous Category">
      Previous
    </button>
  );
}

export default PreviousCategoryButton;
