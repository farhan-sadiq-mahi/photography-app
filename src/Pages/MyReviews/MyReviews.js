import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data.data);
            })
    }, [user.email, handleDelete])





    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <div className='container mx-auto'>
                <h1 className='text-5xl font-bold text-secondary-focus text-center my-12'>My Reviews</h1>
                {
                    myReviews == 0 ? <h1 className='text-xl font-bold text-secondary-focus text-center my-12'>No reviews added</h1>
                        :
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
                                        myReviews.map(review => <ReviewRow key={review._id} data={review} handleDelete={handleDelete} />)
                                    }
                                </tbody>



                                {/* <!-- foot --> */}
                                <tfoot>
                                    <tr>
                                        <th>Service Name</th>
                                        <th>Review</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyReviews;