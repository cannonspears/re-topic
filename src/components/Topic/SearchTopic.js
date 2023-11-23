import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function SearchTopic({ onSearch }) {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = async () => {
    const result = await onSearch(searchId);
    setSearchResult(result);
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="Topic ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
}

export default SearchTopic;
