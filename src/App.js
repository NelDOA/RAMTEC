import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import Demo from './components/Demo';
import FinishedsGalery, { ChapillasNaturales, ChapillasPrefabricadas, PinturasMetal } from './components/FinishedsGalery';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import InProcessPage from './components/InProcessPage';
import NavBar from './components/NavBar';

const items = [ {id:'prod',
                title: 'Productos', 
                href: '', 
                options: [ {title:'Demos', description:'Visualice algunas de nuestras puertas en aluminio', href:'/demo', dSvg:['M15 12a3 3 0 11-6 0 3 3 0 016 0z','M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z']},
                          {title:'Puertas', description:'Fabricadas en aluminio y madera', href:'puertas', dSvg:['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6']},
                          {title:'Ventanas', description:'Con perfiles en aluminio y acabados especiales', href:'ventanas', dSvg:['M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7']},
                          {title:'Muebles', description:'Sillas, mesas y otros elementos, fabricadas a su medida', href:'muebles', dSvg:['M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4']},
                      ],
              footOptions:[   {title:'Ver acabados', description:'Chapillas naturales, prefabricadas y pintura para aluminio', href:'finisheds', dSvg:['M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z','M21 12a9 9 0 11-18 0 9 9 0 0118 0z']},
                              {title:'Le asesoramos', description:'Estamos atentos para ayudarle a elegir su producto', href:'contactUs', dSvg:['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z']},
                          ]
              },
              {id:'aboutUs', title: 'Sobre nosotros', href: 'aboutUs'},
              {id:'contactUs', title: 'Contáctenos', href: 'contactUs'},
    ]; 

const App = () => {
    return (
        <div className='container mx-auto' >
            <Router>
                <NavBar items={items} />
                
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='demo' element={<Demo />} />
                    <Route path='puertas' element={<InProcessPage />} />
                    <Route path='ventanas' element={<InProcessPage />} />
                    <Route path='muebles' element={<InProcessPage />} />
                    <Route path='contactUs' element={<ContactPage />} />
                    <Route path='aboutUs' element={<AboutUsPage />} />
                    <Route path='finisheds' element={<FinishedsGalery />} >
                        <Route path='chapillasNaturales' element={<ChapillasNaturales /> } />
                        <Route path='chapillasPrefabricadas' element={<ChapillasPrefabricadas /> } />
                        <Route path='pinturasMetal' element={<PinturasMetal /> } />
                    </Route>
                    
                </Routes>

                <Footer items={items}/>
                {/* <DemosSection />
                */}
            </Router>
        </div>
    )
}

export default App;
