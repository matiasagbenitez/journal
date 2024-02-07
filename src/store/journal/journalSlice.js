import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        activeNote: null,       // { id: string, title: string, body: string, date: number, imageUrls: array }
        notes: [],
        isSaving: false,
        messageSaved: '',
    },
    reducers: {
        isSavingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.unshift(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note);
            state.messageSaved = `Note saved successfully!`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotes: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.activeNote = null;
            state.notes = [];
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.activeNote = null;
        }
    }
});


export const {
    isSavingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotes,
    deleteNoteById
} = journalSlice.actions;