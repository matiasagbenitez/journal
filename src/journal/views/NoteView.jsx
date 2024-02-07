import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline, SaveOutlined, UploadFile } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );
  const { title, body, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Great job!",
        text: messageSaved,
        showConfirmButton: false,
        timer: 2000,
        customClass: "swal-wide",
        timerProgressBar: true,
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onInputFileChange = (e) => {
    if (e.target.files.length === 0) return;
    dispatch(startUploadingFiles(e.target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={20} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={onInputFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadFile />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          onClick={onSaveNote}
          disabled={isSaving}
          sx={{ ml: 1 }}
          size="small"
        >
          <SaveOutlined sx={{ fontSize: 20, mr: 1 }} />
          <Typography variant="p" fontSize={13}>
            Save note
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
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          fullWidth
          multiline
          label="What happened today?"
          minRows={5}
          size="small"
          sx={{ border: "none", mb: 2 }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button
          variant="outlined"
          color="error"
          onClick={onDelete}
          disabled={isSaving}
          size="small"
        >
          <DeleteOutline sx={{ fontSize: 15, mr: 1 }} />
          <Typography variant="p" fontSize={12}>
            Delete
          </Typography>
        </Button>
      </Grid>

      {/* Image Gallery */}
      <ImageGallery images={activeNote.imageUrls} />
    </Grid>
  );
};
