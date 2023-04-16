import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { useNewsCrud } from "../context/NewsCrudContext";
import { Grid, Box, Button } from "@mui/material";

const DisplayResults = () => {
  const { keyWord } = useNewsCrud();

  const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setNews(keyWord);
  }, [keyWord]);

  console.log("displaying...");

  const renderNewsItem = Array.from(Array(news.length)).map((news) => {
    return (
      <Grid item xs={1} sm={1} md={1}>
        <NewsItem news={news} key={null}></NewsItem>
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 8 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
          {renderNewsItem.length > 0
            ? renderNewsItem
            : "Sorry. No News are available for that Search"}
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          {renderNewsItem.length > 0 ? (
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
          ) : null}
        </Grid>
      </Box>
    </>
  );
};

export default DisplayResults;
