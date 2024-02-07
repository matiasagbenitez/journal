import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { startAddNewEmptyNote } from "../../store/journal";

export const JournalPage = () => {
  const { activeNote, isSaving } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startAddNewEmptyNote());
  };

  return (
    <JournalLayout>
      {activeNote ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            opacity: 0.7,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
          zIndex: 100,
        }}
        color="primary"
        aria-label="add note"
        title="Add note"
      >
        <AddOutlined sx={{ fontSize: 25, color: "primary.main" }} />
      </IconButton>
    </JournalLayout>
  );
};
