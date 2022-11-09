import React from 'react';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl font-bold text-secondary-focus text-center my-12'>My Reviews</h1>
            <h1 className='text-xl font-bold text-secondary-focus text-center my-12'>No reviews added</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full z-0">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>



                    <tbody>
                        {
                            [...Array(5)].map((e, i) => <ReviewRow key={i} />)
                        }
                    </tbody>



                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;