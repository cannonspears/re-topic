import React from "react";
import { NextCategoryButton } from "../index";

function Category({ onClick, currentCategory }) {
  return (
    <div>
      <div>{currentCategory.name}</div>
      <NextCategoryButton onClick={onClick} />
    </div>
  );
}

export default Category;
