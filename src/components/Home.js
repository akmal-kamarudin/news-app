import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MyFavPanel from "./MyFavPanel";
import DisplayResults from "./DisplayResults";
import { Grid } from "@mui/material";

const Home = () => {
  const API_URL = "https://newsapi.org/v2/everything?";
  const pageSize = process.env.REACT_APP_PAGE_SIZE;
  const pageNo = process.env.REACT_APP_PAGE_NO;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [keyWord, setKeyWord] = useState("");

  // const handleSetKeyword = (keyWord) => {
  //   console.log(keyWord);
  //   if (searchTerm !== "") {
  //     const newContactList = contacts.filter((contact) => {
  //       const { id, ...rest } = contact;
  //       return Object.values(rest)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(newContactList);
  //   } else {
  //     setSearchResults(contacts);
  //   }
  // };

  const handleSetKeyword = async (keyWord) => {
    try {
      const response = await axios.get(
        `${API_URL}q=${keyWord}&pageSize=${pageSize}&page=${pageNo}&apiKey=${apiKey}`
      );
      console.log(response);
      const data = await response.data.articles;
      // console.log(data);
      setKeyWord(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateMyFav = () => {};

  return (
    <>
      <Grid container direction="column">
        <Grid
          className="header-container"
          item
          lg={1}
          md={4}
          style={{ maxHeight: "10vh" }}
        >
          <Header handleSetKeyword={handleSetKeyword} keyWord={keyWord}></Header>
        </Grid>
        <Grid className="content-container" item lg={11}>
          <Grid container direction="row" style={{ height: "100vh" }}>
            <Grid item lg={2.5} md={4} style={{ height: "100%" }}>
              <MyFavPanel
                style={{ overflowY: "scroll" }}
                handleSetKeyword={handleSetKeyword}
                // myFavourites={myFavourites}
                // clearMyFav={clearMyFav}
              ></MyFavPanel>
            </Grid>
            <Grid item lg={9.5} md={8}>
              <DisplayResults
                keyWord={keyWord}
                updateMyFav={updateMyFav}
              ></DisplayResults>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
