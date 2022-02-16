import React from 'react'

const FooterNavItem = ({item}) => {
    return (
        <div>
            <h3 className="text-base font-semibold text-sexto/60 tracking-wider uppercase">{item.title}</h3>
            <ul role="list" className="mt-1 space-y-1">
                {item.options?.map((option) => (
                    <li key={option.title}>
                        <a href={option.href} className="text-base text-quinto hover:text-sexto">
                            {option.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNavItem;