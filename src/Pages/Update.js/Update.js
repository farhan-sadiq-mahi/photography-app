import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const oldReview = useLoaderData().data[0];
    const [review, setReview] = useState({});
    const [currentValue, setCurrentValue] = useState(oldReview);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleInputChange = e => {
        const fieldName = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[fieldName] = value;
        setReview(newReview);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newReview = { ...review };
        newReview['rating'] = currentValue;
        console.log(newReview);

        fetch(`http://localhost:5000/update/${oldReview._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();

                toast.success('🦄 Updated Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    return (
        <div>
            <Helmet>
                <title>Update Review</title>
            </Helmet>
            <div className='min-h-screen flex flex-col my-5 text-center'>
                <div className="container max-w-md mx-auto flex-1 flex flex-col items-center px-2">

                    <form onSubmit={handleSubmit} className="bg-primary text-secondary-content px-6 py-8 rounded shadow-md w-full">
                        <h1 className="mb-8 text-3xl text-center font-bold">Update Review</h1>

                        <input onChange={handleInputChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-primary-focus font-semibold"
                            defaultValue={oldReview.serviceName}
                            name="name"
                            disabled
                            placeholder="Name" />
                        <textarea onChange={handleInputChange}
                            type="text"
                            rows='5'
                            cols='500'
                            defaultValue={oldReview.review}
                            className="block border border-grey-light w-full p-3 rounded mb-4 text-primary-focus font-semibold"
                            name="review"
                            placeholder="Review" />

                        <div className="flex justify-center font-bold gap-5">

                            {
                                [...Array(5)].map((e, index) => <FaStar className='text-red-400'
                                    key={index}
                                    size={28}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={() => handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? "#FFBA5A" : "#a9a9a9"}

                                />)
                            }

                        </div>


                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-primary-content text-primary font-bold hover:bg-secondary-content focus:outline-none my-3"
                        >Update This Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;