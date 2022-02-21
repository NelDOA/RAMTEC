import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarItemOptionsOption = ( {option, handleButtonNav} ) => {
    return (
        <>
            <NavLink to={option.href} onClick={handleButtonNav} className="transition ease-in-out delay-50 -m-3 p-2 flex items-start rounded-lg hover:text-white hover:bg-cuarto">
                <svg className="flex-shrink-0 h-6 w-6 text-primero" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {option.dSvg.map((d) => {
                        return <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                    })}
                </svg>
                
                <div className="ml-4">
                    <p className="text-base font-medium text-tercero">{option.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{option.description}.</p>
                </div>
            </NavLink>
        </>
    )
}

export default NavBarItemOptionsOption;