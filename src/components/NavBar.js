import React, { useState } from 'react'
import MenuItem from './MenuItem';
import NavBarItem from './NavBarItem';
const NavBar = () => {

    const items = [ {id:'prod',
                     title: 'Productos', 
                     href: '', 
                     options: [ {title:'Demos', description:'Visualice algunas de nuestras puertas en aluminio', href:'#', dSvg:['M15 12a3 3 0 11-6 0 3 3 0 016 0z','M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z']},
                                {title:'Puertas', description:'Fabricadas en aluminio y madera', href:'#', dSvg:['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6']},
                                {title:'Ventanas', description:'Perfiles en aluminio con acabados especiales', href:'#', dSvg:['M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7']},
                                {title:'Muebles', description:'Sillas, mesas fabricadas a su medida', href:'#', dSvg:['M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4']},
                            ],
                    footOptions:[   {title:'Ver Demo', href:'#', dSvg:['M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z','M21 12a9 9 0 11-18 0 9 9 0 0118 0z']},
                                    {title:'Le asesoramos', href:'#', dSvg:['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z']},
                                ]
                    },
                    {id:'aboutUs', title: 'Sobre nosotros', href: ''},
                    {id:'contactUs', title: 'Contáctenos', href: ''},
    ];
    const [hidden, setHidden] = useState('hidden');
    const handleMenuMobile = () => {
        setHidden( (current) => { 
            return ( current === 'hidden' ) ? '' : 'hidden' ;
        } )
    };

    return (
            <div className="relative bg-white font-ubuntu drop-shadow">
                <div className="md:transition-all max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="md:transition-all flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-5 ">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#" >
                                <span className="sr-only font-sen" >RAMTEC</span>
                                <img className="h-10 w-auto sm:h-10" src="./logo2.svg" alt=""/>
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button onClick={handleMenuMobile} type="button" className="transition ease-in-out delay-100 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto" aria-expanded="false">
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
                            <a href="#" className="transition ease-in-out delay-100 font-sen text-quinto text-sm font-semibold hover:text-tercero">Iniciar sesión</a>
                            <a href="#" className="transition ease-in-out delay-100 ml-3 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-md text-sm font-semibold text-white bg-quinto hover:bg-cuarto">Registrarse</a>
                        </div>
                    </div>
                </div>
                {/* MOBILE MENU :) ORALE! */}
                <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${hidden}`}>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="./logo2.svg" alt="Workflow"/>
                                </div>
                                <div className="-mr-2">
                                    <button  type="button" onClick={handleMenuMobile} className="transition ease-in-out delay-100 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto">
                                        <span className="sr-only">Cerrar menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* MENU DE OPCIONES */}
                        <div className="py-6 px-5 space-y-6">
                            {/* Tener cuidado con el tamaño del arreglo de los items del menu y el limite maximo para grid en Tailwind */}
                            <div className={`grid grid-rows-${items.length}`}>
                                {
                                    items.map((item) => {
                                        return <MenuItem key={item.id} item={item}/>
                                    })
                                }
                            </div>
                        <div>
                            <a href="#" className="transition ease-in-out delay-100 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-quinto hover:bg-cuarto">Registrarse</a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Usuario registrado?
                                <a href="#" className="transition ease-in-out delay-100 text-primero hover:text-cuarto"> Iniciar sesión</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
}

export default NavBar;