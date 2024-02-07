import { useSelector } from "react-redux";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { SidebarItem } from "./SidebarItem";
import { Fragment } from "react";

export const Sidebar = ({ drawerWidth = 240 }) => {
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight={600}
            noWrap
            component="div"
            sx={{ width: "100%", textAlign: "center" }}
          >
            MyJournal
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.length > 0 ? (
            notes.map((note) => <SidebarItem key={note.id} note={note} />)
          ) : (
              <Typography
                sx={{ p: 2, width: "100%" }}
                fontSize={14}
                textAlign={"center"}
                fontStyle={"italic"}
              >
                No entries yet 😢
                <br />
                Start by creating a new one!
              </Typography>
          )}
        </List>
      </Drawer>
    </Box>
  );
};
