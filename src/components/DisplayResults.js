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

  const renderNewsItem = news.map((newsItem) => {
    return (
      <Grid item xs={"auto"} sm={"auto"} md={"auto"} key={newsItem.title}>
        <NewsItem news={newsItem} />
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 8 }}>
        {renderNewsItem.length > 0 ? (
          <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
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
                  mt: 2,
                  width: "14ch",
                  textTransform: "capitalize",
                }}
              >
                Load More
              </Button>
            </Grid>
          </>
        ) : (
          <h2>
            <strong>Sorry, No News are available for that Search</strong>
          </h2>
        )}
      </Box>
    </>
  );
};

export default DisplayResults;

// const renderNewsItem = Array.from(Array(news.length)).map((news, index) => {
//   console.log(news);
//   return (
//     <Grid item xs={1} sm={1} md={1}>
//       <NewsItem news={news} />
//     </Grid>
//   );
// });
