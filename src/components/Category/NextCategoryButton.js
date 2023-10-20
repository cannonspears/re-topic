import React from "react";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

function NextCategoryButton({ onClick }) {
  return (
    <button onClick={onClick} className="categoryButton" title="Next Category">
      Next Category
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <HiArrowRight />
      </IconContext.Provider>
    </button>
  );
}

export default NextCategoryButton;
