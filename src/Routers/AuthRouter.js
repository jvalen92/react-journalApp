import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import LoginScreen from '../Components/auth/LoginScreen';
import RegisterScreen from '../Components/auth/RegisterScreen';

const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="auth/login"
                    component={LoginScreen}
                />

                <Route
                    exact
                    path="auth/register"
                    component={RegisterScreen}
                />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}

export default AuthRouter