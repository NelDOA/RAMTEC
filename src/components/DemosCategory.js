import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DemosCategory = ({src, category, description, href}) => {
    const posDefault = "object-top duration-400";
    const posFinal = "object-bottom duration-[4000ms]";
    const [imgTranslate, setImgTranslate]= useState(posDefault);
    const handleImg = () => {
        setImgTranslate( (current) => { return (current === posDefault ) ? posFinal : posDefault })
    };

    return (
        <div onMouseEnter={handleImg} onMouseLeave={handleImg} className="h-96 relative flex">
            <img
                src={src}
                alt=""
                className={`transition-all  ease-in-out ${imgTranslate} absolute inset-0 w-full h-full  object-cover`}
            />
            <div className="transition duration-1000 ease-in-out relative w-full flex flex-col items-start justify-end bg-black hover:bg-opacity-0 bg-opacity-40 p-8 sm:p-12">
                <h2 className="text-lg font-semibold text-white font-sen">{category}</h2>
                <p className="mt-1 text-2xl font-medium text-white">{description}</p>
                <Link to={href} className="mt-4 text-sm font-semibold text-tercero bg-white py-2.5 px-4 rounded-md hover:bg-sexto shadow-sm ">
                    Ver mas {category}
                </Link>
            </div>
        </div>
    )
}

export default DemosCategory;