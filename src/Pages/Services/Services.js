import React from 'react';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-5xl text-center font-bold my-5 text-error'>All Services</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    [...Array(9)].map((e, i) => <ServiceCard key={i} />)
                }
            </div>
        </div>
    );
};

export default Services;