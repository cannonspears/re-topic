import React from "react";

function CategoryButton({ onClick, title }) {
  return (
    <div className="container">
      <button onClick={onClick} className="categoryButton" title={title}>
        {title}
      </button>
    </div>
  );
}

export default CategoryButton;
