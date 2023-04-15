import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import NewsItem from "./NewsItem";

const DisplayResults = (props) => {
  const { keyWord } = props;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setNews(keyWord);
  }, [keyWord]);

  console.log("displaying...");
  console.log(news);

  const renderNewsItem = Array.from(Array(news.length)).map((news) => {
    return (
      <Grid item xs={1} sm={1} md={1}>
        <NewsItem news={news}></NewsItem>
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 8 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
          {renderNewsItem}
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
