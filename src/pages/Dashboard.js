import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';




const Dashboard = ({isLoggedIn, items}) => {
    return (
        <>
            <NavBar isLoggedIn={isLoggedIn} items={items} />
            <Outlet />
            <Footer items={items}/>
        </>

    )
}

export default Dashboard;