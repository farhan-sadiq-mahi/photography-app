import React from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReviewRow = ({ data, handleDelete }) => {

    const handleDeleteFunction = (id) => {

        const confirmation = window.confirm('Are you sure want to delete ?')
        console.log(confirmation);
        if (confirmation) {
            handleDelete(id)
            toast.success(`✔️ Deleted Successfully`, {
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
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{data.serviceName}</div>
                        <div className="text-sm text-red-700 opacity-50">{
                            [...Array(data.rating)].map((e, i) => <FaStar key={i} className='inline ml-1' />)
                        }</div>
                    </div>
                </div>
            </td>
            <td className='w-48'>{data.review.slice(0, 50)}...
            </td>
            <td className='text-xl text-secondary'><button><FaEdit /> </button></td>
            <th className='text-xl text-secondary'>
                <button onClick={() => handleDeleteFunction(data._id)}><MdDelete /> </button>
            </th>
        </tr>
    );
};

export default ReviewRow;