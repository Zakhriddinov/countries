import { Paper, InputBase } from "@mui/material";
import React, { ChangeEvent, KeyboardEvent } from "react";

type IProps = {
  search: string;
  setSearch: (search: string) => void;
  inputRef: any;
};
const SearchForm = ({ search, setSearch, inputRef }: IProps) => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
    }
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
        onKeyDown={onKeyDown}
        inputRef={inputRef}
      />
    </Paper>
  );
};

export default SearchForm;
