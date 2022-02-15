import React from 'react';

const MenuItemOptionsOption = ({option}) => {
    return (
        <>
            <a href={option.href} className="transition ease-in-out delay-100 m-1 p-1 flex items-start border rounded-lg hover:text-white hover:bg-cuarto">
                <svg className="flex-shrink-0 h-6 w-6 text-primero" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" stroke="currentColor" aria-hidden="true">
                    {option.dSvg.map((d) => {
                        return <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                    })}
                </svg>
                
                <div className="ml-4">
                    <p className="text-lg font-medium text-tercero">{option.title}</p>
                    <p className=" text-sm text-gray-500">{option.description}.</p>
                </div>
            </a>
        </>
    )
}

export default MenuItemOptionsOption;