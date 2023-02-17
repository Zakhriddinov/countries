import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";
import CountriesCard from "./components/CountriesCard";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Data } from "./interface";
import { COUNTRIES_QUERY } from "./graphql/queries";
import { useDebounce } from "./hooks/useDebounce";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 195);

  const { data, loading } = useQuery<Data>(COUNTRIES_QUERY, {
    variables: {
      codes: debouncedValue.toUpperCase(),
    },
  });

  useEffect(() => {}, [search, debouncedValue]);

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
        <SearchForm search={search} setSearch={setSearch} />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        {loading ? (
          <CircularProgress />
        ) : data?.countries?.length === 0 ? (
          <Typography variant="body1" component="h6">
            Information is not available
          </Typography>
        ) : (
          data?.countries?.map((item) => {
            return (
              <CountriesCard element={item} loading={loading} search={search} />
            );
          })
        )}
      </Grid>
    </Grid>
  );
};

export default App;
