import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiSearch } from "react-icons/hi";

function SearchButton({ onSearch }) {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = async () => {
    const result = await onSearch(searchId);
    setSearchResult(result);
  };
  return (
    <div className="searchButton">
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <HiSearch />
        </IconContext.Provider>
      </button>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
}

export default SearchButton;
