import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft } from "react-icons/hi";

function PreviousCategoryButton({ onClick }) {
  return (
    <button onClick={onClick} className="categoryButton" title="Previous Category">
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <HiArrowLeft />
      </IconContext.Provider>
      Previous Category
    </button>
  );
}

export default PreviousCategoryButton;
