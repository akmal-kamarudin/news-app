import React, { useState } from "react";
import { Grid, TextField, Button, Box, LinearProgress } from "@mui/material";

const Login = () => {
  const user = {
    userName: "John",
    password: 12345,
  };

  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState("True");
  const [isLoginInProgress, setIsLoginInProgress] = useState("False");
  const [errorMessage, setErrorMessage] = useState("False");

  const loginButton = (e) => {
    console.log(inputs);
    e.preventDefault();

    if (inputs.userName === "" || inputs.password === "") {
      alert("All the fields are mandatory!");
      return;
    }

    if (inputs.userName === user.userName || inputs.password === user.password) {
      alert("YEAY you got in!");
      setInputs({ userName: "", password: "" });
      return;
    } else {
      alert("BOOO!! Try again..");
      setInputs({ userName: "", password: "" });
      return;
    }
  };

  return (
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
  );
};

export default Login;
