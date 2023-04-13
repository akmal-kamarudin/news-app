import React from "react";
import {
  Grid,
  Divider,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const MyFavPanel = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Divider orientation="vertical" variant="fullWidth" />
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid sx={{ m: 1 }}>My Favourites: </Grid>
          <Button
            variant="contained"
            size="small"
            type="submit"
            color="warning"
            sx={{
              m: 1,
              width: "3ch",
              textTransform: "capitalize",
            }}
          >
            Clear
          </Button>
        </Grid>
        <Box>
          <List>
            <Divider variant="fullWidth" />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="News 1" />
              </ListItemButton>
            </ListItem>
            <Divider variant="fullWidth" />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="News 2" />
              </ListItemButton>
            </ListItem>
            <Divider variant="fullWidth" />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="News 3" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </>
  );
};

export default MyFavPanel;
