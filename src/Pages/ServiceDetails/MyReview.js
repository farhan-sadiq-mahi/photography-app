import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReview = () => {
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
        <div className='p-5 lg:p-0 flex justify-center lg:block'>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">

                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

                    {/* before login */}
                    {/* <div>
                        <h1 className='text-xl text-center mt-3'>Please Login to Share Review</h1>
                        <Link to={'/login'} className="btn w-full my-8 font-semibold rounded-md text-gray-900 bg-teal-400 hover:bg-teal-600">Login Now</Link>
                    </div> */}


                    {/* after login  */}
                    <div>
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
                            <form action="">
                                <textarea name='review' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900 w-full"></textarea>
                                <button type="submit" className="btn w-full my-8 font-semibold rounded-md text-gray-900 bg-teal-400 hover:bg-teal-600">Leave feedback</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default MyReview;