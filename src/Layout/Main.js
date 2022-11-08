import React from 'react';
import { PhotoProvider } from 'react-photo-view';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <PhotoProvider>
                <Outlet />
            </PhotoProvider>
            <Footer />
        </div>
    );
};

export default Main;