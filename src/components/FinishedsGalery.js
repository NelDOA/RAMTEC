import React from 'react'

import {
    ViewGridIcon as ViewGridIconSolid,
    ViewListIcon,
  } from '@heroicons/react/solid'


  const tabs = [
    { name: 'Chapillas naturales', href: '#', current: true },
    { name: 'Chapillas prefabricadas', href: '#', current: false },
    { name: 'Pintura para metal', href: '#', current: false },
  ]

  const files = [
    { id: '25001', name: 'Sapelli Rayado', format: 'webp', src: './acabados/chapillas/naturales/25001_Sapelli-Rayado.webp', current: true,},
    { id: '25003', name: 'Bubinga', format: 'webp', src: './acabados/chapillas/naturales/25003_Bubinga.webp', current: false,} ,
    { id: '25006', name: 'Okume', format: 'webp', src: './acabados/chapillas/naturales/25006_Okume.webp', current: false,} ,
    { id: '25007', name: 'Cedro Brasilero', format: 'webp', src: './acabados/chapillas/naturales/25007_Cedro-Brasilero.webp', current: false,} ,
    { id: '25008', name: 'Roble Rayado', format: 'webp', src: './acabados/chapillas/naturales/25008_Roble-Rayado.webp', current: false,} ,
    { id: '25010a', name: 'C C Green', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Green.webp', current: false,} ,
    { id: '25010b', name: 'C C Orange', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Orange.webp', current: false,}, 
    { id: '25010c', name: 'C C Pink', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Pink.webp', current: false,} ,
    { id: '25010d', name: 'C C Rojo', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Rojo.webp', current: false,} ,
    { id: '25010e', name: 'C C Violet', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Violet.webp', current: false,}, 
    { id: '25010f', name: 'C C Yellow', format: 'webp', src: './acabados/chapillas/naturales/25010_C-C-Yellow.webp', current: false,} ,
    { id: '25011', name: 'C blacK', format: 'webp', src: './acabados/chapillas/naturales/25011_C-blacK.webp', current: false,} ,
    { id: '25014', name: 'Comino Crespo', format: 'webp', src: './acabados/chapillas/naturales/25014_Comino-Crespo.webp', current: false,} ,
    { id: '25016', name: 'Ebano Macazar Natural', format: 'webp', src: './acabados/chapillas/naturales/25016_Ebano-Macazar-Natural.webp', current: false,} ,
    { id: '25024', name: 'Raiz Fresno', format: 'webp', src: './acabados/chapillas/naturales/25024-Raiz-Fresno.webp', current: false,} ,
    { id: '25026', name: 'Fresno Olivato', format: 'webp', src: './acabados/chapillas/naturales/25026_Fresno-Olivato.webp', current: false,} ,
    { id: '25027', name: 'Haya', format: 'webp', src: './acabados/chapillas/naturales/25027_Haya.webp', current: false,} ,
    { id: '25031', name: 'Ziricote', format: 'webp', src: './acabados/chapillas/naturales/25031_Ziricote.webp', current: false,} ,
    { id: '25035', name: 'Nogal Natural', format: 'webp', src: './acabados/chapillas/naturales/25035_Nogal-Natural.webp', current: false,} ,
    { id: '25038', name: 'Ojo Pajaro Tintillado', format: 'webp', src: './acabados/chapillas/naturales/25038_Ojo-Pajaro-Tintillado.webp', current: false,} ,
    { id: '25041', name: 'Palisandro', format: 'webp', src: './acabados/chapillas/naturales/25041_Palisandro.webp', current: false,} ,
    { id: '25043', name: 'Roble Gris', format: 'webp', src: './acabados/chapillas/naturales/25043_Roble-Gris.webp', current: false,} ,
    { id: '25044', name: 'Perillo Natural', format: 'webp', src: './acabados/chapillas/naturales/25044_Perillo-Natural.webp', current: false,} ,
    { id: '25045', name: 'Pino Frances', format: 'webp', src: './acabados/chapillas/naturales/25045_Pino-Frances.webp', current: false,} ,
    { id: '25046', name: 'Pino', format: 'webp', src: './acabados/chapillas/naturales/25046_Pino.webp', current: false,} ,
    { id: '25047', name: 'Piopo', format: 'webp', src: './acabados/chapillas/naturales/25047_Piopo.webp', current: false,}, 
    { id: '25057', name: 'Raiz Fresno Olivato', format: 'webp', src: './acabados/chapillas/naturales/25057_Raiz-Fresno-Olivato.webp', current: false,} ,
    { id: '25058', name: 'Castano Manchado', format: 'webp', src: './acabados/chapillas/naturales/25058_Castano-Manchado.webp', current: false,} ,
    { id: '25063a', name: 'Roble Mallado', format: 'webp', src: './acabados/chapillas/naturales/25063_Roble-Mallado.webp', current: false,} ,
    { id: '25063b', name: 'Roble Natural Rameado', format: 'webp', src: './acabados/chapillas/naturales/25063_Roble-Natural-Rameado.webp', current: false,} ,
    { id: '25067', name: 'Eucalipto Aumado', format: 'webp', src: './acabados/chapillas/naturales/25067_Eucalipto-Aumado.webp', current: false,} ,
    { id: '25070', name: 'Sapelli Rameado', format: 'webp', src: './acabados/chapillas/naturales/25070_Sapelli-Rameado.webp', current: false,} ,
    { id: '25072', name: 'Sicomore', format: 'webp', src: './acabados/chapillas/naturales/25072_Sicomore.webp', current: false,} ,
    { id: '25074', name: 'Tulipier', format: 'webp', src: './acabados/chapillas/naturales/25074_Tulipier.webp', current: false,} ,
    { id: '25076', name: 'Fresno Blanco', format: 'webp', src: './acabados/chapillas/naturales/25076_Fresno-Blanco.webp', current: false,} ,
    { id: '25079', name: 'Roble Thai', format: 'webp', src: './acabados/chapillas/naturales/25079_Roble-Thai.webp', current: false,} ,
    { id: '25081', name: 'Vichada', format: 'webp', src: './acabados/chapillas/naturales/25081_Vichada.webp', current: false,} ,
    { id: '25084', name: 'Verdolago', format: 'webp', src: './acabados/chapillas/naturales/25084_Verdolago.webp', current: false,} ,
    { id: '25085', name: 'Nogal Rayado', format: 'webp', src: './acabados/chapillas/naturales/25085_Nogal-Rayado.webp', current: false,} ,
    { id: '25086', name: 'Fresno Rayado', format: 'webp', src: './acabados/chapillas/naturales/25086_Fresno-Rayado.webp', current: false,}, 
    { id: '25089', name: 'Pluma de Nogal', format: 'webp', src: './acabados/chapillas/naturales/25089_Pluma-de-Nogal.webp', current: false,} ,
    { id: '25110', name: 'Lambda Natural', format: 'webp', src: './acabados/chapillas/naturales/25110_Lambda-Natural.webp', current: false,} ,
    { id: '25116', name: 'Roble Crespo', format: 'webp', src: './acabados/chapillas/naturales/25116_Roble-Crespo.webp', current: false,} ,
    { id: '25120', name: 'Roble Nudoso', format: 'webp', src: './acabados/chapillas/naturales/25120_Roble-Nudoso.webp', current: false,} ,
    
    // {
    //   name: 'IMG_4985.HEIC',
    //   id: '3.9 MB',
    //   src:
    //     'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    //   current: true,
    // },
    // // More files...
  ]
 
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const FinishedsGalery = () => {
    return (
        <div className="flex-1 flex max-w-7xl mx-auto items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
                <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex">
                        <h1 className="flex-1 text-2xl font-bold text-tercero">Acabados</h1>
                        <div className="ml-6 bg-quinto p-0.5 rounded-lg flex items-center sm:hidden">
                            <button
                                type="button"
                                className="p-1.5 rounded-md text-segundo hover:bg-sexto hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                            >
                                <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="sr-only">Modo Lista</span>
                            </button>
                            <button
                                type="button"
                                className="ml-0.5 bg-quinto p-1.5 rounded-md shadow-sm text-segundo hover:bg-sexto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                            >
                                <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
                                <span className="sr-only">Modo Grid</span>
                            </button>
                        </div>
                    </div>
                {/* Tabs */}
                <div className="mt-3 sm:mt-2">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            Select a tab
                        </label>
                        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full pl-3 pr-10 py-2 text-base border-quinto focus:outline-none focus:ring-cuarto focus:border-cuarto sm:text-sm rounded-md"
                            defaultValue="Chapillas naturales"
                        >
                            <option>Chapillas naturales</option>
                            <option>Chapillas prefabricadas</option>
                            <option>Pintura para metal</option>
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex items-center border-b border-quinto">
                            <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <a
                                    key={tab.name}
                                    href={tab.href}
                                    aria-current={tab.current ? 'page' : undefined}
                                    className={classNames(
                                        tab.current
                                        ? 'border-tercero text-tercero'
                                        : 'border-transparent text-segundo hover:text-primero hover:border-cuarto',
                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                    )}
                                    >
                                    {tab.name}
                                    </a>
                                ))}
                            </nav>
                            <div className="hidden ml-6 bg-segundo p-0.5 rounded-lg items-center sm:flex">
                                <button
                                    type="button"
                                    className="p-1.5 rounded-md text-quinto hover:bg-sexto hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                                >
                                    <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Modo Lista</span>
                                </button>
                                <button
                                    type="button"
                                    className="ml-0.5 bg-quinto p-1.5 rounded-md shadow-sm text-segundo focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cuarto"
                                >
                                    <ViewGridIconSolid className="h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Modo Grid</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery */}
                <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                    <h2 id="gallery-heading" className="sr-only">
                        Chapillas naturales
                    </h2>
                    <ul
                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                    >
                    {files.map((file) => (
                        <li key={file.id} className=" relative">
                            <div
                                className={classNames(
                                file.current
                                    ? 'ring-2 ring-offset-2 ring-primero'
                                    : 'transition-transform duration-100 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-quinto focus-within:ring-cuarto',
                                'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-segundo overflow-hidden'
                                )}
                            >
                                <img
                                src={file.src}
                                alt=""
                                className={classNames(
                                    file.current ? '' : ' group-hover:opacity-100',
                                    'object-cover pointer-events-none'
                                )}
                                />
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">Ver detalles de {file.name}</span>
                                </button>
                            </div>
                            <p className="mt-2 block text-sm font-medium text-tercero truncate pointer-events-none">
                                {file.name}
                            </p>
                            <p className="block text-sm font-medium text-primero pointer-events-none">{file.id}</p>
                        </li>
                    ))}
                    </ul>
                </section>
                </div>
            </main>
            {/* Details sidebar */}
        </div>

      )
}

export default FinishedsGalery;