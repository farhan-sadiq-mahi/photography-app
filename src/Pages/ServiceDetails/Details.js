import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Details = () => {
    const rating = Math.round(2.7);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            <PhotoView src="https://placeimg.com/400/400/arch"><img src="https://placeimg.com/400/400/arch" alt="Album" /></PhotoView>
            <div className="card-body">
                <h2 className="card-title text-error font-bold text-4xl">New album is released!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis natus asperiores dolorem modi voluptas consequatur vitae, eveniet aut ipsum ad saepe repellat quibusdam rerum impedit, ducimus, non deserunt blanditiis libero cumque. Esse expedita similique laborum voluptatum harum corrupti a eaque soluta nemo at placeat odit veritatis ducimus, impedit facilis architecto laudantium culpa dolorem corporis earum illo? Dignissimos repellendus esse earum consequatur magni quibusdam cum sequi nemo, eos tenetur quae fugiat consectetur placeat autem facere doloremque libero aliquam ipsum. Voluptatem asperiores omnis ab cum consequatur modi perspiciatis ducimus laborum suscipit dolore reprehenderit numquam quia, maiores in non? Non perspiciatis suscipit molestiae quas dolorum repellendus. Voluptatibus, nisi quos fugiat placeat sequi vero quaerat labore corrupti dolore repellat ea quasi provident non amet?</p>
                <div className="mb-1">
                    <div className='flex justify-between'>
                        <small className='text-lg font-bold'><span className='font-semibold'>Price:</span> $500</small>
                        <small className='text-secondary-focus text-lg'>{
                            rating > 5 ? [...Array(5)].map((e, i) => <FaStar key={i} className='inline ml-1' />) : [...Array(rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                        }</small>
                    </div>
                </div>
                <div className="card-actions justify-start">

                    <Link className="btn btn-secondary w-1/3">Listen</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;