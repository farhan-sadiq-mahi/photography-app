import React from 'react';
import Gallery from './Gallery';
import HeroComponent from './HeroComponent';
import HomeServices from './HomeServices';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {
    return (
        <div>
            <HeroComponent />
            <PhotoProvider>
                <HomeServices />
                <Gallery />
            </PhotoProvider>
        </div>
    );
};

export default Home;