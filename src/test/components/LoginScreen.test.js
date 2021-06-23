import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { LoginScreen } from '../../Components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

jest.mock('../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
}))



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>

)

describe('Test LoginScreen', () => {

    beforeEach(()=> {
        store = mockStore(initState);
        jest.clearAllMocks();
    })


    test('should return the LoginScreen component', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('should shot the startGoogleLogin action', () => {

        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();
    })
    test('should shot startLogin with their arguments', () => {

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenLastCalledWith('','');


    })


})
