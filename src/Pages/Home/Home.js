import React from 'react';
import Gallery from './Gallery';
import HeroComponent from './HeroComponent';
import HomeServices from './HomeServices';
import 'react-photo-view/dist/react-photo-view.css';
import HomeStats from './HomeStats';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Aerial Photography</title>
            </Helmet>
            <HeroComponent />
            <HomeServices />
            <Gallery />
            <HomeStats />
        </div>
    );
};

export default Home;