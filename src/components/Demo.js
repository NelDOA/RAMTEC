import React, { useState } from 'react';

const Demo = () => {
    
    const demos = [
        {   id: 'pt1',
            title: 'Puerta 1', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-1.jpg', 
            srcThumbnail: './muestras-productos/puerta-1-det.jpg',
        },
        {   id: 'pt2',
            title: 'Puerta 2', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-2.jpg', 
            srcThumbnail: './muestras-productos/puerta-2-det.jpg',
        },
        {   
            id: 'pt3',
            title: 'Puerta 3', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-3.jpg', 
            srcThumbnail: './muestras-productos/puerta-3-det.jpg',
        },
        {   id: 'pt4',
            title: 'Puerta 4', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-4.jpg', 
            srcThumbnail: './muestras-productos/puerta-4-det.jpg',
        },
        {   id: 'pt5',
            title: 'Puerta 5', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-5.jpg', 
            srcThumbnail: './muestras-productos/puerta-5-det.jpg',
        },
        {   id: 'pt6',
            title: 'Puerta 6', 
            description: 'Esta es una breve descripción', 
            parts: [{partName:'Marco', material:"Aluminio", finish:'cuhicuchi'}, 
                    {partName:'Hoja (Largueros y travezaños)', material:"Aluminio", finish:'cochococho'},
                    {partName:'Hoja (páneles)', material:"Madera", finish:'cichuchuchu'},
                ], 
            src: './muestras-productos/puerta-6.jpg', 
            srcThumbnail: './muestras-productos/puerta-6-det.jpg',
        },
    ];

    const [slide, setSlide] = useState(demos[0]);
    const handleShowImage = (e) => {
        demos.forEach(element => {
            if (element.id === e.target.id) {
                setSlide(element);
                return;
            }
        });
    };

    return (
        <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="block text-lg text-primero text-center font-semibold font-sen tracking-wide uppercase">
                    Puertas peurtas puertas
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight  font-sen text-tercero sm:text-4xl">
                    Puertas
                    </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8 text-center">
                    Descripcion de la seccion de las puertas
                </p>
            </div>
            <div className="mt-6 text-gray-500 mx-auto">
                {/* Aqui van las muestras */}
                <div className='grid grid-cols-6 gap-2 justify-items-center'>
                    <div className="bg-white col-span-4 row-span-6 h-full w-full">
                        <section className="relative flex flex-wrap">
                            <div className=" lg:relaive lg:w-1/2 lg:max-h-screen px-2  lg:pr-4 xl:pr-10">
                                <img src={slide.src} alt='' className='lg:max-h-screen object-cover' ></img>
                            </div>
                            <div className="max-w-md mx-auto pt-1 pb-1 px-1 sm:pb-1 sm:px-1 lg:max-w-max lg:pt-1 lg:px-8">
                                <div className="">
                                    <h2 className="font-semibold text-xs text-cuarto">
                                        {slide.id}
                                    </h2>
                                    <p className="mt-1 text-2xl font-extrabold text-quinto tracking-tight">{slide.title}</p>
                                    <p className="mt-1 text-xs text-segundo">
                                        {slide.description}
                                    </p>
                                    <dl className="mt-2 grid grid-cols-2 gap-2 text-sm lg:grid-cols-1">
                                        {slide.parts.map((part) => (
                                            <div key={part.partName}>
                                                <dt className="font-semibold text-segundo">{part.partName}</dt>
                                                <dt className="font-medium text-primero"><span className="font-thin text-segundo" >material: </span>{part.material}</dt>
                                                <dd className="mt-0 text-primero"><span className="font-thin text-segundo" >acabados: </span>{part.finish}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </section>
                    </div>
                    {
                        demos.map( (demo) => {
                            return (
                                <div key={demo.id} className= 'transition-all duration-150 ease-in-out col-span-2 max-h-28 rounded-md  shadow-sm shadow-black overflow-hidden hover:scale-110 hover:shadow-xl' >
                                    <img id={demo.id} onClick={handleShowImage}  src={demo.srcThumbnail} alt={demo.src} className=' inset-0 w-full object-cover' ></img>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Demo;