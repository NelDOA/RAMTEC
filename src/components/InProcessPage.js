import React from 'react';
import { Link } from 'react-router-dom';

const InProcessPage = () => {
    return (
        <>
            <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-cuarto sm:text-5xl">404</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-tercero tracking-tight sm:text-5xl">Page not found</h1>
                                <p className="mt-1 text-base text-segundo">Esta página está en construcción. Pronto terminaremos de completar su contenido. Gracias por visitarnos, por favor elija las opciones que le ofrecemos abajo para completar su consulta.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    to="/"
                                    className=" transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full shadow-sm text-white bg-primero hover:bg-cuarto hover:text-tercero focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sexto"
                                >
                                    Ir a página inicial
                                </Link>
                                <Link
                                    to="contactUs"
                                    className="transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-full text-white bg-tercero hover:bg-sexto hover:text-tercero  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto"
                                >
                                    Necesito asesoría
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default InProcessPage;