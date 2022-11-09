import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className='container mx-auto my-24'>
                <h1 className='text-5xl text-center font-bold my-5 text-error'>All Services</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        services.map((e) => <ServiceCard key={e._id} data={e} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;