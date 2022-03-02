import React from 'react';
import MenuItemOptionsOption from './MenuItemOptionsOption';

const MenuItemOptions = ({hidden, options, footOptions, handleMenuMobile}) => {
    return (
        <div className={`animate__animated bg-white z-50 w-full sm:px-0 ${hidden} rounded-lg ring-1 ring-tercero ring-opacity-5 `}>
            <div className="grid bg-gray-100 px-1 py-1">
                {
                    options.map((option) => { 
                            return <MenuItemOptionsOption key={option.title} {...option} handleMenuMobile={handleMenuMobile}/>
                        })
                }
                {
                    footOptions?.map((footOption) => { 
                        return <MenuItemOptionsOption key={footOption.title} {...footOption} handleMenuMobile={handleMenuMobile}/>
                    })
                }

            </div>
        </div>
    )
}

export default MenuItemOptions;