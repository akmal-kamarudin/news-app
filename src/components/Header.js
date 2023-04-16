import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNewsCrud } from "../context/NewsCrudContext";
import { Grid, Divider, TextField, Button, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const Header = () => {
  const { handleSetKeyword, keyWord } = useNewsCrud();

  const LOCAL_STORAGE_KEY1 = "isLoggedIn";
  const LOCAL_STORAGE_KEY2 = "userName";
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1)) ?? false
  );
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) ?? null
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(isLoggedIn));
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(userName));
  }, [isLoggedIn, userName]);

  const [Search, setSearch] = useState("");

  if (!isLoggedIn) return <Navigate to="/"></Navigate>;

  const logoutHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUserName("");
  };

  const getSearchTerm = (e) => {
    e.preventDefault();
    handleSetKeyword(Search);
    setSearch("");
    console.log("Searchingg....");
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid sx={{ m: 1 }}>Today's News</Grid>
        <Grid sx={{ m: 1 }}>
          <form onSubmit={getSearchTerm}>
            <TextField
              id="outlined-size-small"
              label="Search for News"
              size="small"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mr: 1, width: "32ch" }}
            />
            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{
                width: "12ch",
                textTransform: "capitalize",
              }}
            >
              Search
            </Button>
          </form>
        </Grid>
        <Grid sx={{ m: 1 }}>
          <Chip icon={<FaceIcon />} label={userName} color="secondary" />
          <Button
            variant="contained"
            size="small"
            type="submit"
            color="warning"
            sx={{
              ml: 1,
              width: "3ch",
              textTransform: "capitalize",
            }}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Header;
