import {authReducer} from '../../reducers/authReducer'
import { types } from '../../types/types';
describe('Authentication Tests', () => {
    test('should realize the login', () => {
        const initialState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Sebastian'
            }
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual({
            uid: 'abc',
            name: 'Sebastian'
        });
    })

    test('should realize the logout ', () => {
        const initialState = {
            uid: 'asdfghjll123345',
            name: 'Sebastian'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer(initialState, action);
        expect(state).toEqual({});
    });

    test('should not change the state', () => {

        const initState = {
            uid: 'testUID1234',
            name: 'Sebastian'
        };

        const action = {
            type: 'myTestAction',
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );
    })
})
