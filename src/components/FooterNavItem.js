import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavItem = ({item}) => {
    return (
        <div>
            <h3 className="text-base font-semibold text-sexto tracking-wider uppercase">{item.title}</h3>
            <ul role="list" className="mt-1 space-y-1">
                {item.options?.map((option) => (
                    <li key={option.title}>
                        <NavLink to={option.href} className="transition-colors text-base text-cuarto hover:text-sexto">
                            {option.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavItem;