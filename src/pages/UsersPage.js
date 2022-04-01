import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {

    CogIcon,
    MenuIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    TicketIcon,
    XIcon,
} from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

const navigation = [
    { name: 'Mis ordenes', href: 'orders', icon: ShoppingBagIcon, current: true },
    { name: 'Mis solicitudes', href: 'requests', icon: TicketIcon, current: false },
    { name: 'Mis productos', href: 'products', icon: ShoppingCartIcon, current: false },
    { name: 'Mi perfil', href: 'profile', icon: CogIcon, current: false },
];
  
function classNames(...classes) {
return classes.filter(Boolean).join(' ')
};


const UsersPage = () => {

    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch( startLogout() );
    };

    const { name, image } = useSelector( (state) => { return state.auth } );

    const [sidebarOpen, setSidebarOpen] = useState(false)
  
    return (
        <>
            <div className='font-sen' >
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-quinto bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full backdrop-filter backdrop-blur bg-white/40">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-cuarto" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <Link to='/' >
                                            <img
                                                className="h-12 w-auto"
                                                src="/logo2.svg"
                                                alt="RAMTEC"
                                            />
                                        </Link>
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1 font-ubuntu">
                                        {
                                            navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={({ isActive }) => (
                                                        isActive    ?   'group flex items-center px-2 py-2 text-base rounded-md bg-primero font-bold text-white' 
                                                                    :   'group flex items-center px-2 py-2 text-base rounded-md text-segundo font-bold hover:animate-pulse hover:bg-cuarto hover:text-tercero'
                                                    )}
                                                >
                                                    <item.icon
                                                        className='mr-4 flex-shrink-0 h-6 w-6'
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </NavLink>
                                            ))
                                        }
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex bg-tercero p-4">
                                    <button  className="flex-shrink-0 group block">
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src={ image }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-bold text-white">{name}</p>
                                                <p className="text-sm font-bold text-quinto group-hover:text-cuarto">Cerrar sesión</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 bg-gradient-to-br from-tercero via-segundo to-tercero ">
                        <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                            <div className="flex items-center h-14 flex-shrink-0 px-4">
                                <Link to='/'>
                                    <img
                                        className="h-12 w-auto"
                                        src="/logo2.svg"
                                        alt="RAMTEC"
                                    />
                                </Link>
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1">
                                {
                                    navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) => (
                                                isActive    ?   'group flex items-center px-2 py-2 text-base  font-medium rounded-md bg-primero text-white backdrop-blur-sm' 
                                                            :   'group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-segundo hover:text-white'
                                            )}
                                        >
                                            <item.icon
                                                className='mr-3 flex-shrink-0 h-6 w-6'
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </NavLink>
                                    ))
                                }
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex bg-tercero p-4">
                            <button onClick={handleSignOut} className="flex-shrink-0 w-full group block">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-medium text-white">{name}</p>
                                        <p className="text-sm font-medium text-gray-300 group-hover:text-sexto">Cerrar sesión</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:p-2 bg-segundo flex items-center justify-between">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-quinto hover:text-tercero focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-shrink-1 flex items-center px-8">
                            <Link to='/' >
                                <img
                                    className="h-12 w-auto"
                                    src="/logo2.svg"
                                    alt="RAMTEC"
                                />
                            </Link>
                        </div>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-2xl font-semibold text-tercero">Seccion</h1>
                            </div> */}
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
  }

export default UsersPage;