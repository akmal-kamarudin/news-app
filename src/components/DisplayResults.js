import React from "react";
import { Grid, Box } from "@mui/material";
import NewsItem from "./NewsItem";

const DisplayResults = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <NewsItem></NewsItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DisplayResults;
