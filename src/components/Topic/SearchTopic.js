import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchTopic({ onSearch }) {
  const [searchId, setSearchId] = useState("");

  const handleSearch = async () => {
    await onSearch(searchId);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search by Topic ID"
      variant="outlined"
      type="text"
      size="small"
      value={searchId}
      onChange={(e) => setSearchId(e.target.value)}
      onKeyDown={(e) => (e.keyCode === 13 ? handleSearch() : null)}
    />
  );
}

export default SearchTopic;
