import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const tabs = [
    { name: 'Chapillas naturales', href: 'chapillasNaturales' },
    { name: 'Chapillas prefabricadas', href: 'chapillasPrefabricadas'},
    { name: 'Pintura para metal', href: 'pinturasMetal'},
]

const files = [
    { id: '25001', name: 'Sapelli Rayado', format: 'webp', src: '/acabados/chapillas/naturales/25001_Sapelli-Rayado.webp'},
    { id: '25003', name: 'Bubinga', format: 'webp', src: '/acabados/chapillas/naturales/25003_Bubinga.webp'} ,
    { id: '25006', name: 'Okume', format: 'webp', src: '/acabados/chapillas/naturales/25006_Okume.webp'} ,
    { id: '25007', name: 'Cedro Brasilero', format: 'webp', src: '/acabados/chapillas/naturales/25007_Cedro-Brasilero.webp'} ,
    { id: '25008', name: 'Roble Rayado', format: 'webp', src: '/acabados/chapillas/naturales/25008_Roble-Rayado.webp'} ,
    { id: '25010a', name: 'C C Green', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Green.webp'} ,
    { id: '25010b', name: 'C C Orange', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Orange.webp'}, 
    { id: '25010c', name: 'C C Pink', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Pink.webp'} ,
    { id: '25010d', name: 'C C Rojo', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Rojo.webp'} ,
    { id: '25010e', name: 'C C Violet', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Violet.webp'}, 
    { id: '25010f', name: 'C C Yellow', format: 'webp', src: '/acabados/chapillas/naturales/25010_C-C-Yellow.webp'} ,
    { id: '25011', name: 'C blacK', format: 'webp', src: '/acabados/chapillas/naturales/25011_C-blacK.webp'} ,
    { id: '25014', name: 'Comino Crespo', format: 'webp', src: '/acabados/chapillas/naturales/25014_Comino-Crespo.webp'} ,
    { id: '25016', name: 'Ebano Macazar Natural', format: 'webp', src: '/acabados/chapillas/naturales/25016_Ebano-Macazar-Natural.webp'} ,
    { id: '25024', name: 'Raiz Fresno', format: 'webp', src: '/acabados/chapillas/naturales/25024-Raiz-Fresno.webp'} ,
    { id: '25026', name: 'Fresno Olivato', format: 'webp', src: '/acabados/chapillas/naturales/25026_Fresno-Olivato.webp'} ,
    { id: '25027', name: 'Haya', format: 'webp', src: '/acabados/chapillas/naturales/25027_Haya.webp'} ,
    { id: '25031', name: 'Ziricote', format: 'webp', src: '/acabados/chapillas/naturales/25031_Ziricote.webp'} ,
    { id: '25035', name: 'Nogal Natural', format: 'webp', src: '/acabados/chapillas/naturales/25035_Nogal-Natural.webp'} ,
    { id: '25038', name: 'Ojo Pajaro Tintillado', format: 'webp', src: '/acabados/chapillas/naturales/25038_Ojo-Pajaro-Tintillado.webp'} ,
    { id: '25041', name: 'Palisandro', format: 'webp', src: '/acabados/chapillas/naturales/25041_Palisandro.webp'} ,
    { id: '25043', name: 'Roble Gris', format: 'webp', src: '/acabados/chapillas/naturales/25043_Roble-Gris.webp'} ,
    { id: '25044', name: 'Perillo Natural', format: 'webp', src: '/acabados/chapillas/naturales/25044_Perillo-Natural.webp'} ,
    { id: '25045', name: 'Pino Frances', format: 'webp', src: '/acabados/chapillas/naturales/25045_Pino-Frances.webp'} ,
    { id: '25046', name: 'Pino', format: 'webp', src: '/acabados/chapillas/naturales/25046_Pino.webp'} ,
    { id: '25047', name: 'Piopo', format: 'webp', src: '/acabados/chapillas/naturales/25047_Piopo.webp'}, 
    { id: '25057', name: 'Raiz Fresno Olivato', format: 'webp', src: '/acabados/chapillas/naturales/25057_Raiz-Fresno-Olivato.webp'} ,
    { id: '25058', name: 'Castano Manchado', format: 'webp', src: '/acabados/chapillas/naturales/25058_Castano-Manchado.webp'} ,
    { id: '25063a', name: 'Roble Mallado', format: 'webp', src: '/acabados/chapillas/naturales/25063_Roble-Mallado.webp'} ,
    { id: '25063b', name: 'Roble Natural Rameado', format: 'webp', src: '/acabados/chapillas/naturales/25063_Roble-Natural-Rameado.webp'} ,
    { id: '25067', name: 'Eucalipto Aumado', format: 'webp', src: '/acabados/chapillas/naturales/25067_Eucalipto-Aumado.webp'} ,
    { id: '25070', name: 'Sapelli Rameado', format: 'webp', src: '/acabados/chapillas/naturales/25070_Sapelli-Rameado.webp'} ,
    { id: '25072', name: 'Sicomore', format: 'webp', src: '/acabados/chapillas/naturales/25072_Sicomore.webp'} ,
    { id: '25074', name: 'Tulipier', format: 'webp', src: '/acabados/chapillas/naturales/25074_Tulipier.webp'} ,
    { id: '25076', name: 'Fresno Blanco', format: 'webp', src: '/acabados/chapillas/naturales/25076_Fresno-Blanco.webp'} ,
    { id: '25079', name: 'Roble Thai', format: 'webp', src: '/acabados/chapillas/naturales/25079_Roble-Thai.webp'} ,
    { id: '25081', name: 'Vichada', format: 'webp', src: '/acabados/chapillas/naturales/25081_Vichada.webp'} ,
    { id: '25084', name: 'Verdolago', format: 'webp', src: '/acabados/chapillas/naturales/25084_Verdolago.webp'} ,
    { id: '25085', name: 'Nogal Rayado', format: 'webp', src: '/acabados/chapillas/naturales/25085_Nogal-Rayado.webp'} ,
    { id: '25086', name: 'Fresno Rayado', format: 'webp', src: '/acabados/chapillas/naturales/25086_Fresno-Rayado.webp'}, 
    { id: '25089', name: 'Pluma de Nogal', format: 'webp', src: '/acabados/chapillas/naturales/25089_Pluma-de-Nogal.webp'} ,
    { id: '25110', name: 'Lambda Natural', format: 'webp', src: '/acabados/chapillas/naturales/25110_Lambda-Natural.webp'} ,
    { id: '25116', name: 'Roble Crespo', format: 'webp', src: '/acabados/chapillas/naturales/25116_Roble-Crespo.webp'} ,
    { id: '25120', name: 'Roble Nudoso', format: 'webp', src: '/acabados/chapillas/naturales/25120_Roble-Nudoso.webp'} ,
];

  const prefabricadas = [
    { id: '25017', name: 'Ebano Macazar Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25017_Ebano-Macazar-Mallado.webp'}, 
    { id: '25018', name: 'Flormorado Gris Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25018_Flormorado-Gris-Catedral.webp'}, 
    { id: '25020', name: 'Flormorado Gris Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25020_Flormorado-Gris-Mallado.webp'}, 
    { id: '25021', name: 'Flormorado Mallado Claro', format: 'webp', src: '/acabados/chapillas/prefabricadas/25021_Flormorado-Mallado-Claro.webp'}, 
    { id: '25023', name: 'Flomorado Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25023_Flomorado-Catedral.webp'}, 
    { id: '25036', name: 'Nogal Amarillo', format: 'webp', src: '/acabados/chapillas/prefabricadas/25036_Nogal-Amarillo.webp'}, 
    { id: '25039', name: 'Roble Ahumado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25039_Roble-Ahumado.webp'}, 
    { id: '25040', name: 'Roble Negro Fantasia Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25040_Roble-Negro-Fantasia-Catedral.webp'}, 
    { id: '25042', name: 'Roble Negro Fantasia Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25042_Roble-Negro-Fantasia-Mallado.webp'}, 
    { id: '25050', name: 'Napoles', format: 'webp', src: '/acabados/chapillas/prefabricadas/25050_Napoles.webp'}, 
    { id: '25053', name: 'Roble Oscuro Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25053_Roble-Oscuro-Mallado.webp'}, 
    { id: '25055', name: 'Perillo', format: 'webp', src: '/acabados/chapillas/prefabricadas/25055_Perillo.webp'}, 
    { id: '25080', name: 'Roble Oscuro Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25080_Roble-Oscuro-Catedral.webp'}, 
    { id: '25088', name: 'Ebano Macazar Rameado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25088_Ebano-Macazar-Rameado.webp'}, 
    { id: '25090', name: 'Flormorado Malllado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25090_Flormorado-Malllado.webp'}, 
    { id: '25091', name: 'Zebrano Tuniz', format: 'webp', src: '/acabados/chapillas/prefabricadas/25091_Zebrano-Tuniz.webp'}, 
    { id: '25092', name: 'Terra Multicolor', format: 'webp', src: '/acabados/chapillas/prefabricadas/25092_Terra-Multicolor.webp'}, 
    { id: '25093', name: 'Rojo Coreano', format: 'webp', src: '/acabados/chapillas/prefabricadas/25093_Rojo-Coreano.webp'}, 
    { id: '25094', name: 'Roble Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25094_Roble-Catedral.webp'}, 
    { id: '25095', name: 'Palisandro Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25095_Palisandro-Catedral.webp'}, 
    { id: '25096', name: 'Olmo', format: 'webp', src: '/acabados/chapillas/prefabricadas/25096_Olmo.webp'}, 
    { id: '25097', name: 'Ebano Blanco Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25097_Ebano-Blanco-Mallado.webp'}, 
    { id: '25098', name: 'Ebano Oscuro Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25098_Ebano-Oscuro-Mallado.webp'}, 
    { id: '25099', name: 'Ojo Pajaro Claro', format: 'webp', src: '/acabados/chapillas/prefabricadas/25099_Ojo-Pajaro-Claro.webp'}, 
    { id: '25100', name: 'Cenizo Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25100_Cenizo-Mallado.webp'}, 
    { id: '25101', name: 'Nogal Catedral', format: 'webp', src: '/acabados/chapillas/prefabricadas/25101_Nogal-Catedral.webp'}, 
    { id: '25102', name: 'Wenguee Camerun', format: 'webp', src: '/acabados/chapillas/prefabricadas/25102_Wenguee-Camerun.webp'}, 
    { id: '25103', name: 'Verde', format: 'webp', src: '/acabados/chapillas/prefabricadas/25103_Verde.webp'}, 
    { id: '25104', name: 'Cherry Catedral copia', format: 'webp', src: '/acabados/chapillas/prefabricadas/25104_Cherry-Catedral-copia.webp'}, 
    { id: '25105', name: 'Teka Oriental', format: 'webp', src: '/acabados/chapillas/prefabricadas/25105_Teka-Oriental.webp'}, 
    { id: '25106', name: 'Zapelli Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25106_Zapelli-Mallado.webp'}, 
    { id: '25107', name: 'Flormorado Gris Plata Mallado', format: 'webp', src: '/acabados/chapillas/prefabricadas/25107_Flormorado-Gris-Plata-Mallado.webp'}, 
    { id: '25108', name: 'Roble Textura Epsilon', format: 'webp', src: '/acabados/chapillas/prefabricadas/25108_Roble-Textura-Epsilon.webp'}, 
    { id: '25109', name: 'Kappa Dorada', format: 'webp', src: '/acabados/chapillas/prefabricadas/25109_Kappa-Dorada.webp'}, 
    { id: '25111', name: 'Ojo Pajaro Azul', format: 'webp', src: '/acabados/chapillas/prefabricadas/25111_Ojo-Pajaro-Azul.webp'}, 
    { id: '25113', name: 'Ojo de Pajaro crudo', format: 'webp', src: '/acabados/chapillas/prefabricadas/25113_Ojo-de-Pajaro-crudo.webp'}, 
    { id: '25117', name: 'Sigma', format: 'webp', src: '/acabados/chapillas/prefabricadas/25117_Sigma.webp'}, 
    { id: '25119a', name: 'Omicron Multicolor 1', format: 'webp', src: '/acabados/chapillas/prefabricadas/25119_Omicron-Multicolor-1.webp'}, 
    { id: '25119b', name: 'Omicron Multicolor 2', format: 'webp', src: '/acabados/chapillas/prefabricadas/25119_Omicron-Multicolor-2.webp'}, 
    { id: '25119c', name: 'Omicron Multicolor 3', format: 'webp', src: '/acabados/chapillas/prefabricadas/25119_Omicron-Multicolor-3.webp'}, 
    { id: '25122', name: 'Multicolor Azul', format: 'webp', src: '/acabados/chapillas/prefabricadas/25122_Multicolor-Azul.webp'}, 
    { id: '25123', name: 'Nu Multicolor', format: 'webp', src: '/acabados/chapillas/prefabricadas/25123_Nu-Multicolor.webp'}, 
    { id: '25124', name: 'Mompox', format: 'webp', src: '/acabados/chapillas/prefabricadas/25124_Mompox.webp'}, 
    { id: '25125', name: 'Moho', format: 'webp', src: '/acabados/chapillas/prefabricadas/25125_Moho.webp'}, 
];

const pinturas = [
    { id: '26001', name: 'cerezo amarillo', format: 'jpg', src: '/acabados/pinturas-metal/26001_cerezo-amarillo.jpg'}, 
    { id: '26002', name: 'cerezo blanco', format: 'jpg', src: '/acabados/pinturas-metal/26002_cerezo-blanco.jpg'}, 
    { id: '26003', name: 'cerezo claro', format: 'jpg', src: '/acabados/pinturas-metal/26003_cerezo-claro.jpg'}, 
    { id: '26004', name: 'cerezo oscuro', format: 'jpg', src: '/acabados/pinturas-metal/26004_cerezo-oscuro.jpg'}, 
    { id: '26005', name: 'nogal amarillo', format: 'jpg', src: '/acabados/pinturas-metal/26005_nogal-amarillo.jpg'}, 
    { id: '26006', name: 'nogal blanco', format: 'jpg', src: '/acabados/pinturas-metal/26006_nogal-blanco.jpg'}, 
    { id: '26007', name: 'nogal claro', format: 'jpg', src: '/acabados/pinturas-metal/26007_nogal-claro.jpg'}, 
    { id: '26008', name: 'nogal oscuro', format: 'jpg', src: '/acabados/pinturas-metal/26008_nogal-oscuro.jpg'}, 
    { id: '26009', name: 'nuez amarillo', format: 'jpg', src: '/acabados/pinturas-metal/26009_nuez-amarillo.jpg'}, 
    { id: '26010', name: 'nuez claro', format: 'jpg', src: '/acabados/pinturas-metal/26010_nuez-claro.jpg'}, 
    { id: '26011', name: 'nuez oscuro', format: 'jpg', src: '/acabados/pinturas-metal/26011_nuez-oscuro.jpg'}, 
    { id: '26012', name: 'pino amarillo', format: 'jpg', src: '/acabados/pinturas-metal/26012_pino-amarillo.jpg'}, 
    { id: '26013', name: 'pino blanco', format: 'jpg', src: '/acabados/pinturas-metal/26013_pino-blanco.jpg'}, 
    { id: '26014', name: 'pino claro', format: 'jpg', src: '/acabados/pinturas-metal/26014_pino-claro.jpg'}, 
    { id: '26015', name: 'pino oscuro', format: 'jpg', src: '/acabados/pinturas-metal/26015_pino-oscuro.jpg'}, 
    { id: '26016', name: 'roble amarillo', format: 'jpg', src: '/acabados/pinturas-metal/26016_roble-amarillo.jpg'}, 
    { id: '26017', name: 'roble blanco', format: 'jpg', src: '/acabados/pinturas-metal/26017_roble-blanco.jpg'}, 
    { id: '26018', name: 'roble claro', format: 'jpg', src: '/acabados/pinturas-metal/26018_roble-claro.jpg'}, 
    { id: '26019', name: 'roble oscuro', format: 'jpg', src: '/acabados/pinturas-metal/26019_roble-oscuro.jpg'}, 
    { id: '26201', name: 'cerezo texturizado', format: 'jpg', src: '/acabados/pinturas-metal/26201_cerezo-texturizado.jpg'}, 
    { id: '26202', name: 'nogal texturizado', format: 'jpg', src: '/acabados/pinturas-metal/26202_nogal-texturizado.jpg'}, 
    { id: '26203', name: 'nuez texturizado', format: 'jpg', src: '/acabados/pinturas-metal/26203_nuez-texturizado.jpg'}, 
    { id: '26204', name: 'pino texturizado', format: 'jpg', src: '/acabados/pinturas-metal/26204_pino-texturizado.jpg'}, 
    { id: '26205', name: 'roble texturizado', format: 'jpg', src: '/acabados/pinturas-metal/26205_roble-texturizado.jpg'}, 
];

const FinishedsGalery = () => {

    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(tabs[0].href);
    
    useEffect(() => {
        navigate(selectedTab, )
    }, [selectedTab])
    
    const handleSelectedTab = (e) => {
        setSelectedTab(e.target.value)
    };
    return (
        <div className="flex-1 flex max-w-7xl mx-auto items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
                <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex">
                        <h1 className="flex-1 text-2xl font-bold text-tercero">Acabados</h1>

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
                                onChange={handleSelectedTab}
                                className="block w-full pl-3 pr-10 py-2 text-base border-quinto focus:outline-none focus:ring-cuarto focus:border-cuarto sm:text-sm rounded-md"
                                // el nombre de la primera opcion de los tabs
                                defaultValue={tabs[0].name}
                            >
                                {tabs.map((tab)=>{
                                    return <option key={tab.href} value={tab.href}>{tab.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex items-center border-b border-quinto">
                                <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.name}
                                            onClick={handleSelectedTab}
                                            value={tab.href}
                                            className={(selectedTab === tab.href)?`border-tercero text-tercero whitespace-nowrap py-4 px-1 border-b-4 font-medium text-sm`:`border-transparent text-segundo hover:text-primero hover:border-cuarto whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                            >
                                            {tab.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Gallery */}
                    <Outlet />
                </div>
            </main>
            {/* Details sidebar */}
        </div>

      )
}

export const ChapillasNaturales = () => {
    return (
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
                        className={'transition-transform duration-100 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-quinto focus-within:ring-cuarto group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-segundo overflow-hidden'}
                            // 'ring-2 ring-offset-2 ring-primero'
                    >
                        <img
                        src={file.src}
                        alt=""
                        className={' group-hover:opacity-100 object-cover pointer-events-none'}
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
    )
}

export const ChapillasPrefabricadas = () => {
    return (
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
              Chapillas naturales
          </h2>
          <ul
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
          {prefabricadas.map((file) => (
              <li key={file.id} className=" relative">
                  <div
                      className={'transition-transform duration-100 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-quinto focus-within:ring-cuarto group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-segundo overflow-hidden'}
                  >
                      <img
                      src={file.src}
                      alt=""
                      className={`group-hover:opacity-100 object-cover pointer-events-none`}
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
    )
  }

  export const PinturasMetal = () => {
    return (
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
              Chapillas naturales
          </h2>
          <ul
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
          {pinturas.map((file) => (
              <li key={file.id} className=" relative">
                  <div
                      className={'transition-transform duration-100 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-quinto focus-within:ring-cuarto group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-segundo overflow-hidden'}
                  >
                      <img
                      src={file.src}
                      alt=""
                      className={' group-hover:opacity-100 object-cover pointer-events-none'}
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
    )
  }


export default FinishedsGalery;