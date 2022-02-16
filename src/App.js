import React from 'react'
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import DemosSection from './components/DemosSection';

const items = [ {id:'prod',
                title: 'Productos', 
                href: '', 
                options: [ {title:'Demos', description:'Visualice algunas de nuestras puertas en aluminio', href:'#', dSvg:['M15 12a3 3 0 11-6 0 3 3 0 016 0z','M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z']},
                          {title:'Puertas', description:'Fabricadas en aluminio y madera', href:'#', dSvg:['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6']},
                          {title:'Ventanas', description:'Perfiles en aluminio con acabados especiales', href:'#', dSvg:['M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7']},
                          {title:'Muebles', description:'Sillas, mesas fabricadas a su medida', href:'#', dSvg:['M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4']},
                      ],
              footOptions:[   {title:'Ver Demo', href:'#', dSvg:['M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z','M21 12a9 9 0 11-18 0 9 9 0 0118 0z']},
                              {title:'Le asesoramos', href:'#', dSvg:['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z']},
                          ]
              },
              {id:'aboutUs', title: 'Sobre nosotros', href: ''},
              {id:'contactUs', title: 'Contáctenos', href: ''},
    ];
const App = () => {
  return (
    <div className='container mx-auto' >
      <NavBar items={items} />
      <FeatureSection />
      <DemosSection />
      <Footer items={items}/>
    </div>
  )
}

export default App;
