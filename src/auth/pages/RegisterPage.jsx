import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { startRegisterWithEmailPassword } from "../../store/auth";

const initialForm = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [
    (value) => value.length > 2,
    "Name must be at least 3 characters",
  ],
  email: [(value) => value.includes("@"), "Invalid email"],
  password: [
    (value) => value.length > 5,
    "Password must be at least 6 characters",
  ],
};

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
    onInputChange,
  } = useForm(initialForm, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startRegisterWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Create account">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn"
      >
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Your name"
              placeholder="John Doe"
              type="text"
              size="small"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
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
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isAuthenticating}
              >
                <Typography fontSize={13}>Create account</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Grid item>
              <Link
                component={RouterLink}
                color="inherit"
                to="/auth/login"
                fontSize={14}
              >
                Already registered? Log in here
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
