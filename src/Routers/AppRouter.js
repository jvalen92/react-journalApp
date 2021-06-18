import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import JournalScreen from '../Components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogin(true);
            }else{
                setIsLogin(false);
            }

            setChecking(false)
        })

    }, [dispatch, setChecking, setIsLogin])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        isAuthenticated={isLogin}
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={isLogin}
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
