import { registerWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { clearNotes } from "../journal";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        const errorMessage = result.errorMessage;
        if (!result.ok) return dispatch(logout(errorMessage));
        dispatch(login(result));
    }
}

export const startRegisterWithEmailPassword = (formState) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, displayName, email, photoURL, errorMessage } = await registerWithEmailPassword(formState);
        if (!ok) return dispatch(logout(errorMessage));
        dispatch(login({
            uid,
            displayName,
            email,
            photoURL
        }));
    }
}

export const startLoginWithEmailPassword = (formState) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, displayName, email, photoURL, errorMessage } = await loginWithEmailPassword(formState);
        if (!ok) return dispatch(logout(errorMessage));
        dispatch(login({
            uid,
            displayName,
            email,
            photoURL
        }));
    }
}

export const startLogoutFirebase = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotes());
        dispatch(logout());
    }
}