import React from "react";
import { PreviousCategoryButton, NextCategoryButton } from "../index";

function Category({ previousClick, nextClick, currentCategory }) {
  return (
    <div>
      <PreviousCategoryButton onClick={previousClick} className="btn-primary" />
      <div>{currentCategory.name}</div>
      <NextCategoryButton onClick={nextClick} />
    </div>
  );
}

export default Category;
