import React from "react";
import { Grid, Box, Button } from "@mui/material";
import NewsItem from "./NewsItem";

const DisplayResults = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, m: 8 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 4 }}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={1} sm={1} md={1} key={index}>
              <NewsItem></NewsItem>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Button
            variant="contained"
            size="medium"
            type="submit"
            color="warning"
            sx={{
              mt: 2,
              width: "14ch",
              textTransform: "capitalize",
            }}
          >
            Load More
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default DisplayResults;
