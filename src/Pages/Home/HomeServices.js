import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const HomeServices = () => {
    return (
        <div className='my-12 container mx-auto'>
            <h1 className='text-secondary-focus font-bold text-5xl text-center my-5'>Services</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    [...Array(3)].map((e, i) => <ServiceCard key={i} />)
                }
            </div>
            <div className='flex justify-center my-10 p-5'>
                <Link to={'/services'} className="btn btn-outline btn-secondary font-bold w-full lg:w-1/4">
                    See All
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;