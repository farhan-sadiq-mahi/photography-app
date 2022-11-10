import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Details from './Details';
import MyReview from './MyReview';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data.data))
            .catch(error => console.log(error));
    }, [id])



    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.data)
            })
            .catch(error => console.log(error));
    }, [id])



    return (
        <div>
            <Helmet>
                <title>Service Details</title>
            </Helmet>
            <div className='container mx-auto'>
                <div>
                    {/* Service Details */}
                    <Details data={service} />

                    {/* Service Reviews Section */}
                    <h1 className='text-5xl font-bold text-info text-center mt-14'>Service Reviews</h1>

                    <div className='lg:grid lg:grid-cols-4 lg:gap-4 my-12'>

                        {/* review Part  */}
                        <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4'>

                            {
                                reviews.map(review => <ReviewCard key={review._id} data={review} />)
                            }
                        </div>

                        {/* my review  */}
                        <MyReview data={service} />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;