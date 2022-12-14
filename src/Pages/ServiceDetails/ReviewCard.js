import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ data }) => {
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-info bg-info-content text-base-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={data.Img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">{data.name}</h4>
                            <span className="text-xs dark:text-gray-400">{data.serviceName}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        {
                            [...Array(data.rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                        }
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>{data.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;