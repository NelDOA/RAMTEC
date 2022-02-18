import React from 'react'
import NavBarItemOptionsFoot from './NavBarItemOptionsFoot';
import NavBarItemOptionsOption from './NavBarItemOptionsOption';

const NavBarItemOptions = ({hidden, options, footOptions}) => {
    return (
        <div className={`transition-opacity duration-1000 absolute z-10 -ml-4 mt-3  px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${hidden}`}>
            <div className="rounded-lg shadow-lg ring-1 ring-tercero ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {
                        options.map((option) => { 
                             return <NavBarItemOptionsOption key={option.title} option={option} />
                         })
                    }
                </div>

                <div className="px-5 py-5 text-cuarto space-y-6 bg-primero sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {
                        footOptions.map( (footOption) => {
                            return <NavBarItemOptionsFoot key={footOption.title} footOption={footOption} />
                        } )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default NavBarItemOptions;