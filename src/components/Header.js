import React from "react";
import { Grid, TextField, Button, Chip } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const Header = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <h1>Today's News</h1>
        <Grid>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              width: "30ch",
            }}
          >
            Search for News
          </Button>
        </Grid>
        <Grid>
          <Chip icon={<FaceIcon />} label="USERNAME" color="primary" />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              width: "3ch",
            }}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
