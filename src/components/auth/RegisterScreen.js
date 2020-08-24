import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { setError, removeError } from '../actions/ui';


const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError}  = useSelector(state => state.ui);

    const [ formValues, handleInputChange ]  = useForm({
        name: 'Veronica',
        email: 'm.villagordovera@gmail.com',
        password: '12345',
        password2: '12345'
    });

    const { name, email, password, password2 } = formValues;
    
    const handleRegisterForm = (e) => {
        e.preventDefault();

        if( isFormValue() ) {
            console.log('Todos los campos son correctos')
        }
    }

    const isFormValue = () => {

        if(name.trim().length === 0) {
            dispatch( setError( "name is required" ) );
            return false;
        } else if(!validator.isEmail(email) ){
            dispatch( setError( "Email is not valid" ) );
            return false;
        } else if(password !== password2) {
            dispatch( setError( "la contraseña tiene que tener al menos 6 caracteres" ) );
            return false;
        } else if(password.length < 5) {
            dispatch( setError( "The password should be leaft 6 character" ) );
            return false;
        }
        
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            { 
                msgError &&
                (
                    <div className="auth__alert-error">
                        <small>{ msgError }</small>
                    </div>
                )
            }

            <form onSubmit={ handleRegisterForm }>
            <input 
                type="text"
                    placeholder="Name"
                    name="name"
                    value= { name }
                    onChange={ handleInputChange }
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
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

                <input 
                type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                    className="auth__input "
                />

                <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                >
                Register
                </button>

                <Link 
                to="/auth/login"
                className="link"
                >
                Already registered?
                </Link>

            </form>
        </>
    )
}

export default RegisterScreen;