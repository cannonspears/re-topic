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
    <div>
      <input
        type="text"
        placeholder="Topic ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
}

export default SearchButton;
