import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl';
import { useGetData } from '../hook/getHook';


function Client() {
    const navigate = useNavigate();
    const cart = useGetData('categories');
    const product = useGetData('products');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login')
        }
    }, [navigate])
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
    <div>
        <div className='grid grid-cols-3 justify-evenly'>
            {
                cart && cart.map(el => 
                    <div className='w-[230px] text-center shadow-lg p-4 hover:shadow-xl'>
                        <img src={el.image} alt="" />
                        <h2>{el.name}</h2>
                        <button onClick={() => handleDelete(el._id)} className='bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Delete</button>
                    </div>
                )
            }
        </div>
        <div className='grid grid-cols-3 justify-evenly'>
            {
                product && product.map(el => 
                    <div className='w-[230px] text-center shadow-lg p-4 hover:shadow-xl'>
                        <img src={el.image} alt="" />
                        <h2>{el.name}</h2>
                        <button onClick={() => handleDelete(el._id)} className='bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Delete</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Client
