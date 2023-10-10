import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import swal from 'sweetalert';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const LogOutHandler = () => {
    logOut()
      .then(() => swal("Logout Successfull!", "", "success"))
      .catch(error => console.log.error(error))
  }
  return (
    <div className='w-full shadow-lg flex justify-between items-center py-6 px-4'>
        <div className='text-3xl font-bold'>EventElegancce</div>
        <nav className='text-lg font-medium flex items-center gap-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'/reviews'}>Review</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/register'}>Register</Link>
            <div>
              {
                user ?
                <div className='flex items-center gap-4'>
                  <button onClick={LogOutHandler} className='text-white px-3 py-1 rounded bg-orange-500'>Sign Out</button>
                  <span>
                    {user.email}
                  </span>
                </div>
                :
                <Link to={'/login'}>Login</Link>                
              }
            </div>
            {/* <Link to={'/test'}>Test</Link> */}
        </nav>
    </div>
  )
}

export default Navbar