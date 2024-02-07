import React from "react";
import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 2 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
      >
        <CircularProgress color="warning" size={40} />
      </Grid>
    </Grid>
  );
};
