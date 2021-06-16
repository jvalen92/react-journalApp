import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LoginScreen from '../Components/auth/LoginScreen';
import RegisterScreen from '../Components/auth/RegisterScreen';
import {routes} from '../const';

const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <Switch>
                    <Route
                        exact
                        path={routes.login}
                        component={LoginScreen}
                    />

                    <Route
                        exact
                        path={routes.register}
                        component={RegisterScreen}
                    />

                    <Redirect to={routes.login} />
                </Switch>
            </div>
        </div>
    )
}

export default AuthRouter
