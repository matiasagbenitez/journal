import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Grid } from "@mui/material";
import { startLogoutFirebase } from "../../store/auth";

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(startLogoutFirebase());
  };

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
          <Typography>Welcome, {displayName}!</Typography>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="menu"
            sx={{ ml: 1 }}
            title="Logout"
            onClick={onLogout}
          >
            <LogoutOutlined sx={{ fontSize: 20, mr: 1 }} />
            <Typography variant="p" fontSize={15}>
              Log out
            </Typography>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
