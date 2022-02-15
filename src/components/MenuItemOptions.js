import React from 'react';
import MenuItemOptionsOption from './MenuItemOptionsOption';

const MenuItemOptions = ({hidden, options}) => {
    return (
        <div className={`bg-white z-50 w-full sm:px-0 ${hidden} rounded-lg ring-1 ring-tercero ring-opacity-5 `}>
            <div className="grid bg-gray-100 px-1 py-1">
                {
                    options.map((option) => { 
                            return <MenuItemOptionsOption key={option.title} option={option} />
                        })
                }
            </div>
        </div>
    )
}

export default MenuItemOptions;