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
        <Grid sx={{ m: 1 }}>Today's News</Grid>
        <Grid sx={{ m: 1 }}>
          <TextField
            id="outlined-size-small"
            label="Search for News"
            defaultValue="Small"
            size="small"
            sx={{
              mr: 1,
              width: "32ch",
            }}
          />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              width: "12ch",
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid sx={{ m: 1 }}>
          <Chip icon={<FaceIcon />} label="USERNAME" color="primary" />
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              ml: 1,
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
