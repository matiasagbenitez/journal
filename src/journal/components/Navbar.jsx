import { useDispatch } from "react-redux";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material";
import { startLogoutFirebase } from "../../store/auth";

export const Navbar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  }
  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      {/* Navbar content */}
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>JournalApp</Typography>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            sx={{ ml: 2 }}
            title="Logout"
            onClick={onLogout}
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
