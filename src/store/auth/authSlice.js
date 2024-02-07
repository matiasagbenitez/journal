import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated'
        uid: null,
        displayName: null,
        email: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.photoURL = null;
            state.errorMessage = null;
        },
    }
});


export const { login, logout, checkingCredentials } = authSlice.actions;