import React from "react";
import Header from "../components/Header";
import MyFavPanel from "../components/MyFavPanel";
import DisplayResults from "../components/DisplayResults";
import { NewsCrudContextProvider } from "../context/NewsCrudContext";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container direction="column">
        <NewsCrudContextProvider>
          <Grid
            className="header-container"
            item
            lg={1}
            sx={{
              maxHeight: "10vh",
              backgroundColor: "rgba(25, 25, 32, 0.4)",
            }}
          >
            <Header></Header>
          </Grid>
          <Grid className="content-container" item lg={11}>
            <Grid container direction="row" sx={{ height: "100vh" }}>
              <Grid
                item
                lg={2.5}
                sx={{
                  backgroundColor: "rgba(25, 25, 32, 0.4)",
                }}
              >
                <MyFavPanel sx={{ overflowY: "scroll" }}></MyFavPanel>
              </Grid>
              <Grid item lg={9.5}>
                <DisplayResults></DisplayResults>
              </Grid>
            </Grid>
          </Grid>
        </NewsCrudContextProvider>
      </Grid>
    </>
  );
};
export default Home;
