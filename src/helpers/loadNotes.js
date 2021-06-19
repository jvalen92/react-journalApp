import {db} from '../firebase/firebase-config'

export const loadNotes = async (uid) => {
    const notesCollection = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesCollection.forEach( note => {
        notes.push({
            id: note.id,
            ...note.data()
        })
    });

    return notes;

}