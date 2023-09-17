import React from "react";

function CategoryButton({ onClick, title }) {
  return (
    <button onClick={onClick} className="categoryButton" title={title}>
      {title}
    </button>
  );
}

export default CategoryButton;
