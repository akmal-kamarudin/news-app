import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Grid, TextField, Button, Box, LinearProgress } from "@mui/material";

const Login = () => {
  const user = {
    userName: "John",
    password: "1234",
  };

  const LOCAL_STORAGE_KEY1 = "isLoggedIn";
  const LOCAL_STORAGE_KEY2 = "userName";

  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1)) ?? false,
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) ?? null
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(isLoggedIn));
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(inputs.userName));
  }, [isLoggedIn, inputs]);

  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // checks the isLoggedIn status
  if (isLoggedIn) return <Navigate to="/home"></Navigate>;

  const loginButton = (e) => {
    console.log(inputs);
    console.log(user);
    e.preventDefault();

    if (inputs.userName === "" || inputs.password === "") {
      alert("All the fields are mandatory!");
      return;
    }

    if (inputs.userName === user.userName && inputs.password === user.password) {
      setIsLoggedIn(true);
      alert("YEAY you got in!");
    } else {
      setIsLoggedIn(false);
      setInputs({ userName: "", password: "" });
      alert("BOOO!! Try again..");
    }
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ minHeight: "100vh" }}
      >
        <Grid sx={{ mt: 10 }}>
          <h1>Today's News</h1>
        </Grid>
        <form onSubmit={loginButton}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              m: 1,
              width: "60ch",
              height: "40ch",
              borderRadius: "6px",
              backgroundColor: "lightgrey",
              opacity: [0.9, 0.8, 0.6],
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              value={inputs.userName}
              onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, userName: e.target.value }))
              }
              sx={{ m: 2, width: "36ch" }}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="text"
              value={inputs.password}
              onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, password: e.target.value }))
              }
              sx={{ m: 2, width: "36ch" }}
            />

            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                m: 2,
                mb: 0,
                width: "37ch",
              }}
            >
              Login
            </Button>
            <Box sx={{ width: "36ch" }}>
              <LinearProgress />
            </Box>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default Login;
