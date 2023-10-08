import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full shadow-lg flex justify-between items-center py-6 px-4'>
        <div className='text-3xl font-bold'>Event Manager</div>
        <nav className='text-lg font-medium flex gap-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'login'}>Login</Link>
        </nav>
    </div>
  )
}

export default Navbar