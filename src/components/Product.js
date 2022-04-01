import React from 'react';

const infoProduct = [
    {   id: 'PT',
        imgSrc: '/assets/images/doorsHeader.jpg',
        name: 'Puertas',
        description: 'Nuestra especialidad es diseñar y fabricar puertas en aluminio con otros materiales como madera, prefabricados y materiales reciclados, todos ellos de muy buena calidad y duración. Tenemos modelos para diferentes condiciones ambientales',
        types:[
            {   
                name: 'Interior',
                description: 'Para instalar en espacios cerrados',
            },
            {   
                name: 'Exterior',
                description: 'Para instalar a la itemperie',
            },
        ],
        models:[
            {   
                id: '01',
                name: 'Estandar',
                href: '#',
                description: 'Con un travesaño medio. Su estructura se fabrica en aluminio y los tableros en madera, prefabricados o plastico reciclado. Acabados personalizables en cualquiera de sus partes.',
                imgSrc: '/muestras-productos/puerta-1.jpg',
                imgAlt: 'Aqui deberia dibujarse la Puerta 1',
                type: ['Interior',],
                parts: ['Marco', 'Acabado de marco', 'Larguero izquierdo',  'Larguero derecho', 'Travesaño superior', 'Travesaño medio', 'Travesaño inferior', 'Adaptador de marco superior', 'Adaptador de marco inferior', 'Marco de tablero superior', 'Marco de tablero inferior', 'Acabado de estructura de hoja', 'Tablero superior', 'Tablero inferior', 'Acabado de tableros', 'Bisagras', 'Chapa', ],
                useCases: ['Ambientes humedos', 'Ambientes calidos', 'Ambientes frios',],
            },
        
        ],
    },
    {   id: 'VT',
        imgSrc: '/assets/images/windowsHeader.jpg',
        name: 'Ventanas',
        description: 'Esta es una descripcion para las ventanas',
        types:[
            {   
                name: 'tipo A',
                description: '',
            },
        ],
        models:[
            {   
                id: '02',
                name: 'Estandar',
                href: '#',
                description: 'Descripcion del modelo',
                imgSrc: '/muestras-productos/puerta-2.jpg',
                imgAlt: 'Aqui deberia dibujarse la Puerta 1',
                type: ['Normal',],
                parts: [ '', ],
                useCases: ['Ambientes humedos', 'Ambientes calidos', 'Ambientes frios',],
            },
        
        ],
    },
    {   id: 'MB',
        imgSrc: '/assets/images/furnitureHeader.jpg',
        name: 'Muebles',
        description: 'Esta es una descripcion para los muebles',
        types:[
            {   
                name: 'Mesa de comedor',
                description: 'Comedor',
            },
            {   
                name: 'silla de comedor',
                description: 'Comedor',
            },
            {   
                name: 'Mesa de centro',
                description: 'sala',
            },
            {   
                name: 'Centro de entretenimiento',
                description: 'Comedor',
            },
        ],
        models:[
            {   
                id: '01',
                name: 'RAMTEC',
                href: '#',
                description: 'Descripcion del modelo',
                imgSrc: '/muestras-productos/puerta-3.jpg',
                imgAlt: 'Aqui deberia dibujarse el mueble',
                type: ['Mesa de centro',],
                parts: [ '', ],
                useCases: ['Salas de espera', 'Salones', 'Ambientes frios',],
            },
        
        ],
    },
];

const Product = ({cls=0}) => {
    return (
        <>
            <div className="container mx-auto relative bg-primero">
                <div className="absolute inset-0">
                    <img
                        className="animate__animated animate__fadeIn w-full h-full object-cover"
                        src={infoProduct[cls].imgSrc}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-primero mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{ infoProduct[cls].name }</h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        { infoProduct[cls].description }
                    </p>
                </div>
            </div>
            <div className="container mx-auto bg-white">
                <div className="py-6 px-4 sm:py-10 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 flex items-center justify-between sm:px-6 lg:px-1">
                        <h2 className="text-2xl font-extrabold tracking-tight text-tercero">Modelos</h2>
                        <a href="#" className="block text-right text-base font-semibold text-primero hover:text-cuarto">
                            Solicitar nuevo modelo<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                    <h2 id="products-heading" className="sr-only">
                        Modelos
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        {infoProduct[cls].models.map((model) => (
                            <a key={model.id} href={model.href} className="group  border border-quinto rounded-md bg-cuarto/10  shadow-md">
                                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3 p-4">
                                    <img
                                        src={model.imgSrc}
                                        alt={model.imgAlt}
                                        className="animate__animated animate__fadeIn w-full h-full object-center object-cover group-hover:"
                                    />
                                </div>
                                <div className="flex items-center justify-between text-base font-medium bg-segundo border-y border-sexto  px-4">
                                    <h3 className='text-cuarto text-lg font-semibold' >{model.name}</h3>
                                    <p className='text-sexto ' >{model.type}</p>
                                </div>
                                <p className="text-sm italic text-tercero px-4 bg-quinto">{model.useCases.map( (useCase) => { return `· ${useCase} ` } )}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
      )
}

export default Product;