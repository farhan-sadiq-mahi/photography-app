import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom'

const ServiceCard = ({ data }) => {
    return (
        <div>
            <div className="mx-auto card bg-base-100 shadow-xl w-96 md:w-full">
                <figure><PhotoView src={data.Img}><img src={data.Img} className="h-72" alt="PhotoGraphy" /></PhotoView></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description.slice(0, 100)}...</p>

                    {/* slice the discription to 100 caracter for the card */}
                    <div className="mb-1">
                        <div className='flex justify-between'>
                            <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> ${data.price}</small>
                            <small className='text-secondary-focus text-lg'>{
                                [...Array(data.rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                            }</small>
                        </div>
                    </div>

                    <Link to={`/services/${data._id}`} className="btn btn-secondary w-full text-base-100">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;