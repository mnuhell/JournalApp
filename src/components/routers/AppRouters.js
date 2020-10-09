import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthRouters } from './AuthRouters';
import JournalScreen from '../journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) => {
        
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn(true);

                const notes = await loadNotes( user.uid );
                dispatch( setNotes( notes ) )

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
                        <PublicRoute 
                            path="/auth"
                            isAuthenticated={ isLoggedIn } 
                            component={ AuthRouters } 
                        />

                        <PrivateRoute 
                        exact path="/" 
                        isAuthenticated= { isLoggedIn }
                        component={ JournalScreen } />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
    )
}
