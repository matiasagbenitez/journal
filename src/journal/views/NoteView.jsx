import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={20} fontWeight="light">
          28 de agosto
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="outlined" color="primary">
          <SaveOutlined sx={{ fontSize: 16, mr: 1 }} />
          <Typography variant="p" fontSize={13}>
            Guardar
          </Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert title"
          label="Title"
          autoComplete="off"
          size="small"
          sx={{ border: "none", my: 2 }}
        />

        <TextField
          type="text"
          //   variant="filled"
          fullWidth
          multiline
          label="What happened today?"
          minRows={5}
          size="small"
          sx={{ border: "none", mb: 2 }}
        />

        {/* Image Gallery */}
        <ImageGallery />
      </Grid>
    </Grid>
  );
};
