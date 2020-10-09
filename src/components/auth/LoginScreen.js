import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {GoogleButton} from '../botones/Google';
import useForm from '../hooks/useForm';
import { startLoginEmailPassword } from '../actions/auth';
import validator from 'validator';
import { setError, removeError } from '../actions/ui';


const LoginScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        email: 'veronikazaragoza@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleSubmit = evt => {
        evt.preventDefault();

        if( isFormValid() ){
            dispatch( startLoginEmailPassword(email, password) )
        }
    }

    const isFormValid = () => {

        if( !validator.isEmail(email)) {
            dispatch( setError('El email no es correcto'));
            return false;
        }

        dispatch( removeError() )
        return true;
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
                disabled= { loading }
                >
                Login
                </button>

                <GoogleButton />

            </form>
        </>
    )
}

export default LoginScreen;