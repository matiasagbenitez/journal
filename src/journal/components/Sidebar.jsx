import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const Sidebar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);

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
          <Typography variant="h6" noWrap component="div">
            {displayName || "Unnamed"}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"].map(
            (text, index) => (
              <ListItem key={text} sx={{ pb: 0 }}>
                <ListItemButton sx={{ p: 0 }}>
                  <ListItemIcon sx={{ pr: 0 }}>
                    <TurnedInNot sx={{ fontSize: "20px" }} />
                  </ListItemIcon>
                  <Grid container direction="column">
                    <Grid item sx={{ m: 0 }}>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          variant: "small",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      />
                    </Grid>
                    <Grid item sx={{ m: 0 }}>
                      <ListItemText secondary="Lorem ipsudasdas" />
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
