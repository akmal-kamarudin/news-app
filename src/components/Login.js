import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
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
        component="form"
        noValidate
        autoComplete="off"
      >
        <Grid>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{
              m: 2,
              width: "36ch",
            }}
          />
        </Grid>
        <Grid>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{
              m: 2,
              width: "36ch",
            }}
          />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            size="large"
            sx={{
              m: 2,
              width: "37ch",
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
