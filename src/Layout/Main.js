import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Im main js </h1>
            <Outlet />

        </div>
    );
};

export default Main;