import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { startLogout } from '../actions/auth';
import MenuItem from './MenuItem';
import NavBarItem from './NavBarItem';
const NavBar = ({isLoggedIn, items}) => {

    const [hidden, setHidden] = useState('hidden');
    const dispatch = useDispatch();

    const handleMenuMobile = () => {
        setHidden( (current) => { 
            return ( current === 'hidden' ) ? 'animate__slideInDown' : 'hidden' ;
        } )
    };

    const handleSignOut = () => {
        dispatch( startLogout() );
    };

    const { name, image } = useSelector((state) => {
         return state.auth;
    });



    return (
            <div className="relative bg-white font-ubuntu">
                <div className=" mx-auto px-4 sm:px-6  border-b-2 border-quinto/20">
                    <div className="container mx-auto flex justify-between items-center py-6 md:justify-start md:space-x-5 ">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/" >
                                <span className="sr-only font-sen" >RAMTEC</span>
                                <img className="animate__animated animate__slideInDown h-10 w-auto sm:h-10" src="/logo2.svg" alt=""/>
                            </NavLink>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button onClick={handleMenuMobile} type="button" className=" bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto" aria-expanded="false">
                                <span className="sr-only">Abrir menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex items-center space-x-10">
                            {
                                items.map((item) => {
                                    return <NavBarItem key={item.id} item={item}/>
                                })
                            }
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            {
                                // Evaluar si el usuario se encuentra logueado para mostar opciones de usuario o de inicio de sesión
                                isLoggedIn ? 
                                <>
                                    <NavLink to="/users/" className="text-quinto hover:text-tercero flex-shrink-0 group md:flex md:flex-initial">
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    className="inline-block h-9 w-9 md:hidden lg:inline-block rounded-full"
                                                    src={image}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-tercero md:hidden lg:inline-block group-hover:text-primero">{name}</p>
                                                <p className="transition-colors text-xs font-medium text-quinto md:text-white md:bg-tercero  md:hover:bg-primero md:p-1 lg:text-quinto lg:bg-white lg:hover:bg-white lg:p-0 rounded-md group-hover:text-cuarto">Ir a mi cuenta</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <button onClick={ handleSignOut } className=" ml-3 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-md text-sm font-semibold text-white bg-quinto hover:bg-cuarto">Cerrar sesión</button>
                                </> 
                                : 
                                <>
                                    <NavLink to="signIn" className=" font-sen text-quinto text-sm font-semibold hover:text-tercero">Iniciar sesión</NavLink>
                                    <NavLink to="signUp" className=" ml-3 whitespace-nowrap inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-md text-sm font-semibold text-white bg-quinto hover:bg-cuarto">Registrarse</NavLink>
                                </> 
                            }
                            
                        </div>
                    </div>
                </div>
                {/* MOBILE MENU :) ORALE! */}
                <div className={`animate__animated z-10 absolute top-0 inset-x-0 p-2 md:hidden ${hidden}`}>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="/logo2.svg" alt="Workflow"/>
                                </div>
                                <div className="-mr-2">
                                    <button  type="button" onClick={handleMenuMobile} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto">
                                        <span className="sr-only">Cerrar menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* MENU DE OPCIONES */}
                        <div className=" bg-white py-6 px-5 space-y-6">
                            {/* Tener cuidado con el tamaño del arreglo de los items del menu y el limite maximo para grid en Tailwind */}
                            <div className={`grid grid-rows-${items.length}`}>
                                {
                                    items.map((item) => {
                                        return <MenuItem key={item.id} {...item} handleMenuMobile={handleMenuMobile} />
                                    })
                                }
                            </div>
                        <div>
                            <Link to="signUp" className=" w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-quinto hover:bg-cuarto">Registrarse</Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Usuario registrado?
                                <Link to="signIn" className=" text-primero hover:text-cuarto"> Iniciar sesión</Link>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
}

export default NavBar;