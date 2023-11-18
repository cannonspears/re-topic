import React from "react";
import { PreviousCategoryButton, NextCategoryButton } from "../index";

function Category({ previousClick, nextClick, currentCategory }) {
  return (
    <div className="container text-center">
      <PreviousCategoryButton onClick={previousClick} />
      <div>{currentCategory.name}</div>
      <NextCategoryButton onClick={nextClick} />
    </div>
  );
}

export default Category;
