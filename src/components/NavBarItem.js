import React, { useState } from 'react'
import NavBarItemOptions from './NavBarItemOptions';

const NavBarItem = ({item}) => {

    const [hidden, setHidden] = useState('hidden opacity-0 translate-y-1');
    const [dirArrow, setDirArrow] = useState('rotate-0');

    const handleButtonNav = () => { 
        setHidden((current)=>{
            return current==='hidden opacity-0 translate-y-1' ? 'opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-1';
        });
        setDirArrow((current)=>{
            return current==='rotate-0' ? 'rotate-180' : 'rotate-0';
        });
     }
     // Se evalua si el item a renderizar tiene opciones dentro de si, para crear su respectivo menu, de lo contrario se crea solo un MediaElementAudioSourceNode
    if (item.options) {
        return (
            <>
                <div className="relative">
                    {/* <!-- Item active: "text-tercero", Item inactive: "text-gray-500" --> */}
                    <button type="button"  onClick={handleButtonNav} className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-tercero focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cuarto" aria-expanded="true">
                        <span className="font-sen">{item.title}</span>
                        <svg className={` ${dirArrow} text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* Se crea el menu de opciones para el nav bar item */}
                    <NavBarItemOptions hidden={hidden} options={item.options} footOptions={item.footOptions} />
                </div>
            </>
        );
    } else {
        // si el item no tiene opciones, solo renderiza un enlace con su href con estilos
        return (
            <a href={item.href} className="text-base font-sen text-gray-500 hover:text-tercero"> {item.title} </a>
        );
    }  
}

export default NavBarItem;