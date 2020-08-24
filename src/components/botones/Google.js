import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';


export const GoogleButton = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <div className="auth__social-network">
            <p>Login with social network</p>
            <div className="google-btn"
            onClick={ handleGoogleLogin }
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
            <Link 
            to="/auth/register"
            className="link"> Create new account</Link>
        </div>
    )
}