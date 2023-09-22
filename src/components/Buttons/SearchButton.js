import React from "react";
import { IconContext } from "react-icons";
import { HiSearch } from "react-icons/hi";

function SearchButton({}) {
  return (
    <button className="searchButton">
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <HiSearch />
      </IconContext.Provider>
    </button>
  );
}

export default SearchButton;
