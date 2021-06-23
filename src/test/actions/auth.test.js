import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import "@testing-library/jest-dom";

import { types } from "../../types/types";
import {
  login,
  logout,
  startLogout,
  startLoginEmailPassword,
} from "../../actions/auth";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Auth Test", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("Login and logout should return theut own action", () => {
    const uid = "ABC123";
    const displayName = "Sebastian";

    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });

    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test("debe de realizar el startLogout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout,
    });

    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  test('debe de iniciar el startLoginEmailPassword', async() => {
    jest.setTimeout(20000);
    await store.dispatch( startLoginEmailPassword('sebas@testing.com','ABC123') );

    const actions = store.getActions();
    
    expect( actions[1] ).toEqual({
        type: types.login,
        payload: {
            uid: 'pH0YAv82PcfSH4uMMMwrl8D7jez2',
            displayName: null
        }
    })

})
});
