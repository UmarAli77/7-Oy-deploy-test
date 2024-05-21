import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl';


function Client() {
    const navigate = useNavigate();
    const [ cart, setCart ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login')
        }
    }, [])
    useEffect(() => {
        async function getCategory() {
            try {
                const response = await axios.get(`${backendUrl}/categories`);
                setCart(response.data);
            }catch(eer) {
                console.log('Xatolik yuz berdi', eer);
            }
        }
        getCategory()
    }, [])
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: token,
            }
            const response = await axios.delete(`${backendUrl}/categories/${id}`, {
                headers: headers
            })
            if(response.data) {
                navigate(0)
            }
        } catch(err) {
            console.log('Xatolik yuz berdi ', err);
        }
    }
    return (
    <div className='grid grid-cols-3 justify-evenly'>
        {
            cart.map(el => 
                <div className='w-[230px] text-center shadow-lg p-4 hover:shadow-xl'>
                    <img src={el.image} alt="" />
                    <h2>{el.name}</h2>
                    <button onClick={() => handleDelete(el._id)} className='bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>
            )
        }
    </div>
  )
}

export default Client
