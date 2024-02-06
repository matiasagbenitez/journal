import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create account">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Your name"
              name="name"
              placeholder="John Doe"
              type="text"
              size="small"
              fullWidth
            />
          </Grid>
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
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <Typography fontSize={13}>Create account</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item>
              <Link component={RouterLink} color="inherit" to="/auth/login" fontSize={14}>
                Already registered? Log in here
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
