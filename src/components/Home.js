import React from "react";
import Header from "./Header";
import MyFavPanel from "./MyFavPanel";
import DisplayResults from "./DisplayResults";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <Grid container className="main-container" direction={"column"}>
        <Grid className="header-container" item lg={1} style={{ maxHeight: "10vh" }}>
          <Header />
        </Grid>
        <Grid className="content-container" item lg={11}>
          <Grid container direction="row" style={{ height: "100%" }}>
            <Grid className="left-panel-container" item lg="2.5">
              <MyFavPanel
                style={{ overflowY: "scroll" }}
                // handleSetKeyword={handleSetKeyword}
                // myFavourites={myFavourites}
                // clearMyFav={clearMyFav}
              ></MyFavPanel>
            </Grid>
            <Grid className="result-container" item lg="9.5">
              <DisplayResults
              // keyWord={keyWord}
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
