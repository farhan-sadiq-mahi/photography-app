import React from 'react';
import { FaStar } from 'react-icons/fa'
import { PhotoView } from 'react-photo-view';

const HomeServices = () => {
    const rating = Math.round(2.7);
    return (
        <div className='my-12 container mx-auto'>
            <h1 className='text-secondary-focus font-bold text-5xl text-center my-5'>Services</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>

                <div className="mx-auto card bg-base-100 shadow-xl w-96 md:w-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg" alt="PhotoGraphy" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-1">
                            <div className='flex justify-between'>
                                <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> $500</small>
                                <small className='text-secondary-focus text-lg'>{
                                    rating > 5 ? [...Array(5)].map((e, i) => <FaStar key={i} className='inline ml-1' />) : [...Array(rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                                }</small>
                            </div>
                        </div>
                        <button className="btn btn-secondary w-full text-base-100">View Details</button>
                    </div>
                </div>


                <div className="mx-auto card bg-base-100 shadow-xl w-96 md:w-full">
                    <figure><PhotoView src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg"><img src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg" alt="PhotoGraphy" /></PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-1">
                            <div className='flex justify-between'>
                                <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> $500</small>
                                <small className='text-secondary-focus text-lg'>{
                                    rating > 5 ? [...Array(5)].map((e, i) => <FaStar key={i} className='inline ml-1' />) : [...Array(rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                                }</small>
                            </div>
                        </div>
                        <button className="btn btn-secondary w-full text-base-100">View Details</button>
                    </div>
                </div>

                <div className="mx-auto card bg-base-100 shadow-xl w-96 md:w-full">
                    <figure><img src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg" alt="PhotoGraphy" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-1">
                            <div className='flex justify-between'>
                                <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> $500</small>
                                <small className='text-secondary-focus text-lg'>{
                                    rating > 5 ? [...Array(5)].map((e, i) => <FaStar key={i} className='inline ml-1' />) : [...Array(rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                                }</small>
                            </div>
                        </div>
                        <button className="btn btn-secondary w-full text-base-100">View Details</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-10 p-5'>
                <button className="btn btn-outline btn-secondary font-bold w-full lg:w-1/4">See All</button>
            </div>
        </div>
    );
};

export default HomeServices;