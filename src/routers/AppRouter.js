import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import LogIn from '../components/LogIn';
import DashboardRoutes from './DashboardRoutes';

import Demo from '../components/Demo';
import FeatureSection from '../components/FeatureSection';
import FinishedsGalery from '../components/FinishedsGalery';
import App from '../App';


const AppRouter = () => {
    return (
        <Router>

            <Routes>
                <Route  path='/' element={<App />}>

                    <Route path='inicio' element={<FeatureSection />} />
                    <Route path='acabados' element={<FinishedsGalery />} />
                    <Route path='demo' element={<Demo />} />

                </Route>
            </Routes>


        </Router>
    )
}

export default AppRouter;