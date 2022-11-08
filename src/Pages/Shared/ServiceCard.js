import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';

const ServiceCard = () => {
    const rating = Math.round(2.7);
    // find the rating and add here
    return (
        <div>
            <div className="mx-auto card bg-base-100 shadow-xl w-96 md:w-full">
                <figure><PhotoView src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg"><img src="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__340.jpg" alt="PhotoGraphy" /></PhotoView></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt, asperiores illo laudantium aspernatur ducimus aliquam, perferendis possimus omnis et, quae a nisi tenetur exercitationem molestias natus molestiae in quas corrupti officiis deserunt atque quasi repellat? </p>

                    {/* slice the discription to 100 caracter for the card */}
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
    );
};

export default ServiceCard;