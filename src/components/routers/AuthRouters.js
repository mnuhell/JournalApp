import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'

export const AuthRouters = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route
                    exact 
                    path="/auth/Login" 
                    component={ LoginScreen } />

                    <Route 
                    exact
                    path="/auth/Register" 
                    component={ RegisterScreen  } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </div>
    )
}
