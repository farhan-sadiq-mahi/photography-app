import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homeservices')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='my-12 container mx-auto'>
            <h1 className='text-secondary-focus font-bold text-5xl text-center my-5'>Services</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>

                {
                    services.map(service => <ServiceCard data={service} key={service._id} />)
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