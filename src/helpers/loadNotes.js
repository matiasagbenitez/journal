import { collection, getDocs, query, orderBy } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('UID not found');
    const notesRef = collection(firebaseDB, `${uid}/journal/notes`);

    // Crear una consulta ordenada por fecha de creación en orden descendente
    const queryRef = query(notesRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(queryRef);

    const notes = [];
    querySnapshot.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return notes;
};