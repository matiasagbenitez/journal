import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
