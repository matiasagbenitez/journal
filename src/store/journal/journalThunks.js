import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, isSavingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startSetNotes = () => {
    return async (dispatch, getState) => {
        // UID del usuario
        const { uid } = getState().auth;
        if (!uid) throw new Error('UID not found');
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startAddNewEmptyNote = () => {
    return async (dispatch, getState) => {

        dispatch(isSavingNewNote());

        // UID del usuario
        const { uid } = getState().auth;

        const note = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        };

        // Referencia a la colección de notas del usuario
        const ref = doc(collection(firebaseDB, `${uid}/journal/notes`));
        note.id = ref.id;

        // Guardar la nota en la base de datos
        await setDoc(ref, note);

        dispatch(addNewEmptyNote(note));
        dispatch(setActiveNote(note));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToSave = { ...activeNote };
        delete noteToSave.id;

        // Referencia a la nota en la base de datos
        const ref = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(ref, noteToSave, { merge: true });

        dispatch(updateNote({
            id: ref.id,
            ...noteToSave
        }));
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));
    }
}


export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { activeNote } = getState().journal;
        const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(activeNote.id));
    }
}