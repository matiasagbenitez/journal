import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const initialForm = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value !== "", "Email is required"],
  password: [(value) => value !== "", "Password is required"],
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const {
    formState,
    email,
    emailValid,
    password,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(initialForm, formValidations);

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Log in">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn"
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Email"
              placeholder="johndoe@email.com"
              type="text"
              size="small"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Password"
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating || !isFormValid}
              >
                <Typography fontSize={13}>Log in</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ marginLeft: 1 }} fontSize={13}>
                  Sign in with Google
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item>
              <Link
                component={RouterLink}
                color="inherit"
                to="/auth/register"
                fontSize={14}
              >
                Not registered yet? Register here
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
