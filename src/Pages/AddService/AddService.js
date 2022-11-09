import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const [service, setService] = useState({});
    const [currentValue, setCurrentValue] = useState(0);
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
        const newService = { ...service };
        newService[fieldName] = value;
        setService(newService);
        // console.log(fieldName, service)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newService = { ...service };
        newService['rating'] = currentValue;
        console.log(newService);
        // console.log(service);




        // toast 

        toast.success('🦄 Service added successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(service)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         e.target.reset();
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }


    return (
        <div className='min-h-screen flex flex-col my-5 text-center'>
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center px-2">

                <form onSubmit={handleSubmit} className="bg-primary text-secondary-content px-6 py-8 rounded shadow-md w-full">
                    <h1 className="mb-8 text-3xl text-center font-bold">Add Service</h1>

                    <input onChange={handleInputChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 text-primary-focus font-semibold"
                        name="name"
                        placeholder="Name" />
                    <input onChange={handleInputChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 text-primary-focus font-semibold"
                        name="price"
                        placeholder="price" />
                    <textarea onChange={handleInputChange}
                        type="text"
                        rows='5'
                        cols='500'
                        className="block border border-grey-light w-full p-3 rounded mb-4 text-primary-focus font-semibold"
                        name="description"
                        placeholder="Description" />

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
                    >Add This Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;