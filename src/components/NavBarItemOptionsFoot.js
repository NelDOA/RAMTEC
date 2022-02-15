import React from 'react';

const NavBarItemOptionsFoot = ({footOption}) => {
    return (
        <div className="flow-root">
            <a href={footOption.href} className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-white hover:bg-segundo">
            {/* <!-- Heroicon name: outline/play --> */}
                <svg className="flex-shrink-0 h-6 w-6 text-sexto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {
                        footOption.dSvg.map( (d) => { 
                            return <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                         } )
                    }
                </svg>
                <span className="ml-3">{footOption.title}</span>
            </a>
        </div>
    )
}

export default NavBarItemOptionsFoot;