import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReviewRow = () => {
    const [reviews, setReviews] = useState({});

    const handleDelete = (ia) => {

        toast.error(`❌ Deleted Successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td className='w-1/2'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quis natus, nisi odio <br /> fugiat officiis neque deleniti quibusdam ratione enim modi <br /> minima atque inventore dolores <br /> similique laboriosam!
            </td>
            <td className='text-xl text-secondary'><button><FaEdit /> </button></td>
            <th className='text-xl text-secondary'>
                <button onClick={() => handleDelete('kisu dilam')}><MdDelete /> </button>
            </th>
        </tr>
    );
};

export default ReviewRow;