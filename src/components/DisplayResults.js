import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { useNewsCrud } from "../context/NewsCrudContext";
import { Grid, Box, Button, LinearProgress, Typography } from "@mui/material";

const DisplayResults = () => {
  const { keyWord, news, handleSetKeyword } = useNewsCrud();
  const [isLoading, setIsLoading] = useState(false);
  const [defaultNews, setDefaultNews] = useState(true);

  useEffect(() => {
    if (defaultNews) {
      handleSetKeyword(keyWord);
      setDefaultNews(false);
    }
  }, [defaultNews, handleSetKeyword, keyWord]);

  useEffect(() => {
    if (keyWord || news.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [keyWord, news]);

  const renderNewsItem = news.map((newsItem) => {
    return (
      <Grid item xs={"auto"} sm={"auto"} md={"auto"} key={newsItem.title}>
        <NewsItem news={newsItem} />
      </Grid>
    );
  });

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", m: 4 }}>
        Latest News for {keyWord}
      </Typography>
      <Box sx={{ flexGrow: 1, m: 8 }}>
        {isLoading ? (
          <LinearProgress color="secondary" />
        ) : (
          <>
            {renderNewsItem.length > 0 ? (
              <>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 1, sm: 2, md: 4 }}
                >
                  {renderNewsItem}
                </Grid>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    size="medium"
                    type="submit"
                    color="warning"
                    sx={{
                      mt: 4,
                      width: "14ch",
                      textTransform: "capitalize",
                    }}
                  >
                    Load More
                  </Button>
                </Grid>
              </>
            ) : (
              <Typography variant="h5" sx={{ fontWeight: "bold", m: 4 }}>
                Sorry, No News are available for that Search
              </Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default DisplayResults;
