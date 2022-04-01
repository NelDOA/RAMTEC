import React from 'react';
import { SunIcon, ScissorsIcon, ScaleIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

const FeatureSection = () => {
    const features = [
        {
          name: 'A su medida',
          description:
            'El diseño de las puertas es completamente personalizable, con acabados tradicionales, monocromáticos y también con acabados que simulan la madera.',
          icon: ScissorsIcon,
        },
        {
          name: 'También ideales para entornos húmedos y cálidos',
          description:
            'Los materiales de nuestros productos son altamente resistentes al agua, óxido, humedad y  otros factores ambientales, lo cual los hace duraderos: el aluminio es resistente a la corrosión y requiere poco mantenimiento.',
          icon: SunIcon,
        },
        {
          name: 'Equilibrio: Ligereza y resistencia',
          description:
            'El aluminio permite que los productos tengan una alta resistencia mecanica con bajo peso, esto hace el proceso de instalación mas facil.',
          icon: ScaleIcon,
        },
        {
          name: 'Asequibles',
          description:
            'Diseñamos, fabricamos y comecializamos nuestros productos para ofrecer precios sin sobrecostos causados por extensas cadenas de intermediarios o vendedores.',
          icon: CurrencyDollarIcon,
        },
    ]
    return (
        <div className="py-12 bg-white font-sen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg text-primero font-semibold font-sen tracking-wide uppercase">Puertas, ventanas y mobiliario con estilo para sus espacios</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight font-sen text-tercero sm:text-4xl">
                      Aluminio + Madera
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-quinto font-ubuntu lg:mx-auto">
                        
                    </p>
                </div>
                <div className="mt-10">
                    <dl className=" z-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-14 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cuarto text-white">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-ubuntu font-medium text-tercero">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base  text-justify text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;