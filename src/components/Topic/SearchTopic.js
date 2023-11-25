import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField, Stack } from "@mui/material";

function SearchTopic({ onSearch }) {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = async () => {
    const result = await onSearch(searchId);
    setSearchResult(result);
  };

  return (
    <div>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <TextField
          id="outlined-basic"
          label="Search by Topic ID"
          variant="outlined"
          type="text"
          size="small"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Stack>
      {/* {searchResult && <p>{searchResult}</p>} */}
    </div>
  );
}

export default SearchTopic;
