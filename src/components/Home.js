import React, { useState } from "react";
import api from "../api/config";
import Header from "./Header";
import MyFavPanel from "./MyFavPanel";
import DisplayResults from "./DisplayResults";
import { Grid } from "@mui/material";

const API_URL = "https://newsapi.org/v2/everything?";

const Home = () => {
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

  // const retrieveNews = async () => {
  //   const response = await api.get("baseURL");
  //   const data = await response.json();
  // };

  const handleSetKeyword = async (keyWord) => {
    const response = await fetch(
      `${API_URL}q=${keyWord}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response);
    // const data = await response.json();

    // setMovies(data.Search);
  };

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
                // updateMyFav={updateMyFav}
              ></DisplayResults>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
