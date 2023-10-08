import React from 'react'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className='w-fit mx-auto mt-16 rounded-3xl overflow-hidden shadow-2xl'>
            <div className='text-center px-8 pt-6'>
                <h2 className="text-purple-700 text-3xl font-bold">Login Here</h2>
                <p className='text-xl font-light mt-2'>
                    Welcome Back you've
                    <br />
                    been missed!
                </p>
            </div>
            <div className='px-8 my-10 flex flex-col'>
                <input type="email" name="email" placeholder='Enter your email here' className='outline-purple-600 p-2 border-2 border-black rounded-md' />
                <div className='mt-10 flex items-center'>
                    <input type="password" name="password" placeholder='Enter your password here' className='outline-purple-600 p-2 border-2 border-black rounded-md w-full' />
                    <span className='-ml-7'><FaEye /></span>
                </div>
            </div>
            <div className='w-full mt-1 mb-8 px-8'>
                <input type="submit" value="Login" className='bg-purple-600 text-white text-lg font-medium w-full py-1 rounded-md' />
            </div>
            <div className='mx-8 flex justify-between items-end gap-2 p-1'>
                <p className='font-light text-sm'>Don't have an account yet?</p>
                <Link to={'/register'} className='text-purple-800 font-medium'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Login