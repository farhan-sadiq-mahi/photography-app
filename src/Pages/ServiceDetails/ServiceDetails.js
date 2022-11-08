import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceDetails = () => {
    const rating = Math.round(2.7);

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);


    const handleClick = value => {
        setCurrentValue(value)
        console.log(currentValue);
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div className='container mx-auto'>
            <div className='my-5'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
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
            </div>
            <h1>Service Reviews</h1>
            <div className='lg:grid lg:grid-cols-4 lg:gap-4'>


                <div className='col-span-3 border-red-300 border-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {/* review card  */}
                    <div>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-info bg-info-content text-base-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-400">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    {
                                        rating > 5 ? [...Array(5)].map((e, i) => <FaStar key={i} className='inline ml-1' />) : [...Array(rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                                    }
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-info bg-info-content text-base-100">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-400">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* my review  */}
                <div className='p-5 lg:p-0'>
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">

                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">

                                    {
                                        [...Array(5)].map((e, index) => <FaStar className='text-red-400'
                                            key={index}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={() => handleMouseLeave}
                                            color={(hoverValue || currentValue) > index ? "#FFBA5A" : "#a9a9a9"}

                                        />)
                                    }

                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-teal-400">Leave feedback</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;