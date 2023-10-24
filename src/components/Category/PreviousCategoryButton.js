import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft } from "react-icons/hi";

function PreviousCategoryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-outline-secondary btn-sm"
      title="Previous Category"
    >
      Previous
    </button>
  );
}

export default PreviousCategoryButton;
