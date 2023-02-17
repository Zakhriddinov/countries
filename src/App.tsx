import React from "react";
import { Container } from "@mui/material";
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";
import CountriesCard from "./components/CountriesCard";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <Title />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <SearchForm />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <CountriesCard />
      </Grid>
    </Grid>
  );
};

export default App;
