import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import MenuItemOptions from './MenuItemOptions';

const MenuItem = ({title, href, options, footOptions, handleMenuMobile}) => {

    const [optionsHidden, setOptionsHidden] = useState('hidden');
    const [dirArrow, setDirArrow] = useState('rotate-0');

    const handleItemMenu = () => { 
        setOptionsHidden((current)=>{
            return current==='hidden' ? 'animate__fadeIn' : 'hidden';
        });
        setDirArrow((current)=>{
            return current==='rotate-0' ? 'rotate-180' : 'rotate-0';
        });
     }

     // Se evalua si el item a renderizar tiene opciones dentro de si, para crear su respectivo menu, de lo contrario se crea solo un MediaElementAudioSourceNode
    if (options) {
        return (
            <div className="relative w-full">
                <button type="button"  onClick={handleItemMenu} className="my-1 p-1 group bg-primero/80 hover:text-tercero focus:bg-primero focus:outline-none focus:ring-1 focus:ring-offset-3 focus:ring-cuarto w-full flex items-center justify-center border border-transparent rounded-md shadow-md text-white text-xl" aria-expanded="true">
                    <span className="font-sen">{title}</span>
                    <svg className={` ${dirArrow} text-gray-200 ml-2 h-5 w-5 group-hover:text-gray-300`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {/* Se crea el menu de opciones para el nav bar item */}
                <MenuItemOptions hidden={optionsHidden} options={options} footOptions={footOptions} handleMenuMobile={handleMenuMobile}/>
            </div>
        );
    } else {
        // si el item no tiene opciones, solo renderiza un enlace con su href con estilos
        return (
            <NavLink to={href} onClick={handleMenuMobile} className="my-1 p-1 group bg-primero/80 hover:text-tercero focus:bg-primero focus:outline-none focus:ring-1 focus:ring-offset-3 focus:ring-cuarto w-full flex items-center justify-center border border-transparent rounded-md shadow-md text-white text-xl"> {title} </NavLink>
        );
    }  
}

export default MenuItem;