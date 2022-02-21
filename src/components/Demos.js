import React from 'react';
import DemosCategory from './DemosCategory';

const Demos = () => {

    const categories = [
        {id: 'one' , src: './muestras-productos/puerta-1.jpg' , category: 'Puertas' , description: 'En aluminio y madera' , href: '/demo' },
        {id: 'two' , src: './muestras-productos/puerta-3-det.jpg' , category: 'Ventanas' , description: 'En aluminio con acabados de pintura especiales' , href: '#' },
        {id: 'three' , src: './muestras-productos/puerta-5.jpg' , category: 'Muebles' , description: 'De fabricacion especial o con diseños y medidas estandar' , href: '#' },
    ];

    return (

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {
                categories.map( (category) => {
                    return <DemosCategory key={category.id} {...category}/>
                } )
            }
          </div>
      )
}

export default Demos;