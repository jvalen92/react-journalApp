import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';


const initState = {
    auth: {
        uid: 'Testing'
    }
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState)

describe('Test notes actions', () => {

    beforeEach( () => {

        store = mockStore(initState);

    });

    test('should create new note', async() => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        console.log(actions[0].payload.id);
        const docId = actions[0].payload.id;
        await db.doc(`/Testing/journal/notes/${ docId }`).delete();
    })
})


