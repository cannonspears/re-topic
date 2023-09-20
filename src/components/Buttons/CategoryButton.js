import React from "react";
import { IconContext } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

function CategoryButton({ onClick, title }) {
  return (
    <button onClick={onClick} className="categoryButton" title={title}>
      {title}
      <IconContext.Provider value={{ style: { verticalAlign: "middle", marginLeft: 10 } }}>
        <HiArrowRight />
      </IconContext.Provider>
    </button>
  );
}

export default CategoryButton;
