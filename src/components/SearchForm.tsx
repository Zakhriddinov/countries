import { Paper, InputBase } from "@mui/material";
import React, { ChangeEvent } from "react";

type IProps = {
  search: string;
  setSearch: (search: string) => void;
};
const SearchForm = ({ search, setSearch }: IProps) => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toUpperCase());
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by country code"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onChangeName}
        value={search}
      />
    </Paper>
  );
};

export default SearchForm;
