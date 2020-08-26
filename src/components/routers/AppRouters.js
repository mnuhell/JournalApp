import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouters } from './AuthRouters';
import JournalScreen from '../journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
        
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        setchecking(false);

    }, [dispatch, setchecking, setIsLoggedIn]);

    
    if( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
            <Router>
                <div>
                    <Switch>
                        <Route 
                            path="/auth" 
                            component={ AuthRouters } 
                        />

                        <Route 
                        exact path="/" 
                        component={ JournalScreen } />

                    <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
    )
}
