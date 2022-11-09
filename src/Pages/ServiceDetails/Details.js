import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Details = ({ data }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            <figure className='w-full'><PhotoView src={data.Img}><img className='h-full' src={data.Img} alt="Album" /></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title text-error font-bold text-4xl">{data.name}</h2>
                <p>{data.description}</p>
                <div className="mb-1">
                    <div className='flex justify-between'>
                        <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> ${data.price}</small>
                        <small className='text-secondary-focus text-lg'>{
                            [...Array(data.rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                        }</small>
                    </div>
                </div>
                <div className="card-actions justify-start">

                    <Link className="btn btn-secondary w-1/3">Hire Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;