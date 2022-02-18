import React from 'react';
import Demos from './Demos';

const DemosSection = () => {
    return (
        <div id='demos' className="relative py-16 bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-lg text-primero text-center font-semibold font-sen tracking-wide uppercase">
                        Algunas muestras de nuestros productos
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight  font-sen text-tercero sm:text-4xl">
                        Demos
                        </span>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        Descripcion de la seccion
                    </p>
                </div>
                <div className="mt-6 text-gray-500 mx-auto">
                    {/* Aqui van las muestras */}
                    <Demos />
                </div>
            </div>
        </div>
      )
}

export default DemosSection;