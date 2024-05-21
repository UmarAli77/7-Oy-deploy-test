import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl'

function Login() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const Submit = async () => {
      try {
          const response = await axios.post(`${backendUrl}/auth`, {
          email: email,
          password: password
        })
        if(response.data) {
          navigate('/admin')
          localStorage.setItem('token', response.data)
        }
      }catch(err) {
        console.log('Xatolik yuz berdi', err);
      }
    }
  return (
    <div className='w-screen h-screen bg-green-600 flex items-center justify-center'>
      <div className='bg-white p-5 w-[340px] rounded-2xl shadow-2xl'>
        <h1 className='text-center text-3xl mb-3'>Login</h1>
        <div className='flex justify-between items-center mt-6'>
            <label htmlFor="username">User Name</label>
            <input className='cursor-pointer border-2 border-black border-solid rounded-md' id='username' type="text" value={email} onChange={(el) => {setEmail(el.target.value)}} />
        </div>
        <div className='flex justify-between items-center mt-5'>
            <label htmlFor="password">Password</label>
            <input className='cursor-pointer ml-12 border-2 border-black border-solid rounded-md' id='password' type="password" value={password} onChange={(el) => {setPassword(el.target.value)}} /><br />
        </div>
        <button onClick={Submit} type='button' className='px-8 py-2 bg-black rounded-md text-white mt-8 ml-24'>Login</button>
      </div>
    </div>
  )
}

export default Login
