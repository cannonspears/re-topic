import React from "react";
import { PreviousCategoryButton, NextCategoryButton } from "../index";

function Category({ previousClick, nextClick, currentCategory }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <PreviousCategoryButton onClick={previousClick} />
        </div>
        <div className="col">{currentCategory.name}</div>
        <div className="col">
          <NextCategoryButton onClick={nextClick} />
        </div>
      </div>
    </div>
  );
}

export default Category;
