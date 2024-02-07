import React, { useMemo } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";
import { useDispatch } from "react-redux";

export const SidebarItem = ({ note }) => {
  const dispatch = useDispatch();

  const { id, title, date } = note;
  const newTitle = useMemo(() => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
  }, [title]);
  const newDate = useMemo(() => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    });
  }, [date]);

  const handleClickNote = () => {
    dispatch(setActiveNote(note));
  };

  return (
    <ListItem key={id} sx={{ px: 2, mb: 1 }} disablePadding>
      <ListItemButton sx={{ p: 0 }} onClick={handleClickNote}>
        <ListItemIcon>
          <TurnedInNot sx={{ fontSize: "20px" }} />
        </ListItemIcon>
        <Grid sx={{ mb: 0 }}>
          <Grid>
            <ListItemText
              primary={newTitle}
              primaryTypographyProps={{
                variant: "small",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
          </Grid>
          <Grid item sx={{ m: 0 }}>
            <ListItemText
              secondary={newDate}
              secondaryTypographyProps={{ fontSize: "13px" }}
            />
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
