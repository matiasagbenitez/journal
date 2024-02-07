import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { uid, displayName, email, photoURL } = result.user;
        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}

export const registerWithEmailPassword = async ({ displayName, email, password }) => {
    try {
        const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = result.user;
        await updateProfile(firebaseAuth.currentUser, {
            displayName,
            photoURL: photoURL || `https://ui-avatars.com/api/?name=${displayName}`
        });

        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
        return {
            ok: true,
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL
        }
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    try {
        await firebaseAuth.signOut();
        return {
            ok: true
        }
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message
        }
    }
}