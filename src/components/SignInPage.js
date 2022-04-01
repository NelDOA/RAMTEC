import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { startGoogleLogin, startSignInWithEmailAndPassword } from '../actions/auth';
import { removeError, setError } from '../actions/ui';
import { Link } from 'react-router-dom';


const SignInPage = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( ( state ) => {
        return state.ui
    });

    const [ formValues, handleInputChange, formReset ] = useForm({
        email: 'ndortizajob@gmail.com',
        password: '123456',
    });

    const { email, password } = formValues;

    const isFormValid = () => {

        if ( !validator.isEmail( email ) ) {
            dispatch(setError('se requiere un email correcto'));
            return false;
        } else if ( password.trim().length === 0 ) {
            dispatch(setError('Se requiere una contraseña'));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    const handleSignIn = (e) => {

        e.preventDefault();

        if (isFormValid) {

            dispatch( startSignInWithEmailAndPassword( email, password ) );
            
        }
    };

    const handleGoogleLogin = () => {

        return dispatch( startGoogleLogin() );
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
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-primero font-ubuntu">Inicie sesión con su cuenta</h2>
                    <p className="mt-2 text-center text-sm text-segundo">
                        No tiene una cuenta?{' '}
                        <a href="signUp" className="font-medium text-primero hover:text-cuarto">
                            Regístrese
                        </a>
                    </p>
                </div>

                <div className="mt-4 mx-1 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST" onSubmit={ handleSignIn } >
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
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="transition-all appearance-none block w-full px-3 py-2 border border-sexto rounded-md shadow-sm placeholder-quinto focus:outline-none focus:ring-primero focus:border-cuarto sm:text-sm"
                                        value={ password }
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

                                <div className="text-sm">
                                    <a href="#" className="transition-colors  font-medium text-primero hover:text-cuarto">
                                        Olvidó su contraseña?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="transition-colors w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primero hover:bg-cuarto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primero"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-quinto" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-quinto">O ingrese con</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <button
                                        
                                        className="transition-colors w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-segundo hover:bg-sexto/10"
                                    >
                                        <span className="sr-only">Ingresar con Facebook</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div>
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="transition-colors w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-segundo hover:bg-sexto/10"
                                    >
                                        <span className="sr-only">Ingresar con google</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage;