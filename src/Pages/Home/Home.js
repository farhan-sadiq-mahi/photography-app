import React from 'react';
import Gallery from './Gallery';
import HeroComponent from './HeroComponent';
import HomeServices from './HomeServices';
import 'react-photo-view/dist/react-photo-view.css';
import HomeStats from './HomeStats';

const Home = () => {
    return (
        <div>
            <HeroComponent />
            <HomeServices />
            <Gallery />
            <HomeStats />
        </div>
    );
};

export default Home;