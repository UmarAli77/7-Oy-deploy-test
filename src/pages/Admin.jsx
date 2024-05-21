import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { backendUrl } from '../Url/backendUrl';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if(!name || !img) {
            toast("Maydonlarni toldiring !")
        }
        try {
            const token = localStorage.getItem('token')
            const headers = {
                Authorization: token,
            };
            const data = {
                name: name,
                image: img
            }
            const response = await axios.post(`${backendUrl}/categories`, data, {
                headers: headers
            });
            if(response.data) {
                navigate('/')
            }
        } catch(err) {
            console.log('Xatolik yuz berdi', err);
        }
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-purple-600'>
      <div className='bg-white p-4 shadow-lg hover:shadow-xl'>
        <h1 className='text-center text-xl pb-2'>Create Category</h1>
        <div>
            <label htmlFor="name" className='text-lg'>Category Name</label>
            <br />
            <input type="text" id="name" className='cursor-pointer py-3 border-2' value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Enter Category Name" />
        </div>
        <div>
            <label htmlFor="img" className='text-lg'>Image Address</label>
            <br />
            <input type="text" id="img" className='cursor-pointer py-3 border-2' value={img} onChange={(ev) => setImg(ev.target.value)} placeholder="Enter Image Address" />
        </div>
        <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10' onClick={handleSubmit}>Submit</button>
            <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Admin
