import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithNameEmailPassword } from '../actions/auth';
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( (state) => { 
        return state.ui;
    });

    const [ formValues, handleInputChange, formReset ] = useForm({
        name: 'Nelsiton',
        email: 'ndortiza@gmail.com',
        password1: '123456',
        password2: '123456',
    });

    const { name, email, password1, password2 } = formValues;

    const handleSignUp = (e) => {

        e.preventDefault();

        if (isFormValid()) {
            dispatch( startRegisterWithNameEmailPassword( email, password1, name ) );
        }
    };

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch(setError('se requiere un nombre'));
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch(setError('se requiere un email correcto'));
            return false;
        } else if ( password1 !== password2) {
            dispatch(setError('Las contraseñas deben ser iguales'));
            return false;
        }else if ( password1.length < 6 ) {
            dispatch(setError('Las contraseña debe tener al menos 6 caracteres'));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sen">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link to='/'>
                        <img
                            className="mx-auto h-28 w-auto"
                            src="logo1.svg"
                            alt="RAMTEC"
                        />
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-primero font-ubuntu">Registre su nueva cuenta</h2>
                    <p className="mt-2 text-center text-sm text-segundo">
                        Ya tiene una cuenta?{' '}
                        <a href="signIn" className="font-medium text-primero hover:text-cuarto">
                            Inicie sesión
                        </a>
                    </p>
                </div>

                <div className="mt-4 mx-1 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST" onSubmit={ handleSignUp } >

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primero">
                                    Nombre
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="transition-all appearance-none block w-full px-3 py-2 border border-sexto rounded-md shadow-sm placeholder-quinto focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                                        value={ name }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primero">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="transition-all appearance-none block w-full px-3 py-2 border border-sexto rounded-md shadow-sm placeholder-quinto focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                                        value={ email }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-primero">
                                    Contraseña
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password1"
                                        name="password1"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="transition-all appearance-none block w-full px-3 py-2 border border-sexto rounded-md shadow-sm placeholder-quinto focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                                        value={ password1 }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-primero">
                                    Confirmar contraseña
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password2"
                                        name="password2"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="transition-all appearance-none block w-full px-3 py-2 border border-sexto rounded-md shadow-sm placeholder-quinto focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                                        value={ password2 }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-primero focus:ring-cuarto border-quinto rounded"
                                    />
                                    <label htmlFor="remember-me" className="transition-colors ml-2 block text-sm text-tercero">
                                        Recordar datos
                                    </label>    
                                </div>
                            </div>

                            {
                                msgError &&
                                (
                                    <div className="animate__animated animate-bounce sm:mx-auto sm:w-full sm:max-w-md">
                                        <p className="mt-2 text-center text-sm text-red-600"> {msgError} </p>
                                    </div>
                                )
                            }

                            <div>
                                <button
                                    type="submit"
                                    className="transition-colors w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primero hover:bg-cuarto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primero"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;