import React from 'react';
import Details from './Details';
import MyReview from './MyReview';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {

    return (
        <div className='container mx-auto'>
            <div>
                {/* Service Details */}
                <Details />

                {/* Service Reviews Section */}
                <h1 className='text-5xl font-bold text-info text-center mt-14'>Service Reviews</h1>

                <div className='lg:grid lg:grid-cols-4 lg:gap-4 my-12'>

                    {/* review Part  */}
                    <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>

                    {/* my review  */}
                    <MyReview />

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;