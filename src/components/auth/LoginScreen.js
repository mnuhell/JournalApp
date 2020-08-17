import React from 'react';
import {GoogleButton} from '../botones/Google';


const LoginScreen = () => {

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form>
                <input 
                type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input 
                type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input "
                />

                <button
                type="submit"
                className="btn btn-primary btn-block"
                >
                Login
                </button>

                <GoogleButton />

            </form>
        </>
    )
}

export default LoginScreen;