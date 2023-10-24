import React from "react";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

function NextCategoryButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-outline-secondary btn-sm" title="Next Category">
      Next
    </button>
  );
}

export default NextCategoryButton;
