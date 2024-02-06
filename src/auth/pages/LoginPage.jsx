import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Log in">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Email"
              name="email"
              placeholder="johndoe@email.com"
              type="text"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Typography fontSize={13}>Log in</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ marginLeft: 1 }} fontSize={13}>
                  Sign in with Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item>
              <Link component={RouterLink} color="inherit" to="/auth/register" fontSize={14}>
                Not registered yet? Register here
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
