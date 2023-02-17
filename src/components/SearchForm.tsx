import { Divider } from "@mui/material";
import { Paper, IconButton, InputBase } from "@mui/material";
import React from "react";
const SearchForm = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by country code"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default SearchForm;