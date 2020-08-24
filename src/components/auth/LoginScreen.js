import React from 'react';
import { useDispatch } from 'react-redux';
import {GoogleButton} from '../botones/Google';
import useForm from '../hooks/useForm';
import { startLoginEmailPassword } from '../actions/auth';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        email: 'm.villagordovera@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch( startLoginEmailPassword(email, password) )
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleSubmit }>
                <input 
                type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={ handleInputChange }
                    className="auth__input"
                    autoComplete="off"
                />
                <input 
                type="password"
                    placeholder="password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
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