import React from "react";
import { Grid, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "calc(100vh - 115px)", backgroundColor: "primary.main", borderRadius: 3}}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 80, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h6">
            Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};