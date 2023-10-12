import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
import { GoogleAuthProvider } from "firebase/auth";


const Register = () => {
  const [registerError, setRegisterError] = useState('');     // an empty string evaluated to be false
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);

  const notify = (message) => toast.error(message);
  const { createUser, handleGoogleUser, auth, provider } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    
    setRegisterError('');
    setRegisterSuccess('');
    
    
    const email = e.target.email.value;     // from name attribute of input:email
    const password = e.target.password.value;
    console.log(email, password);
    
    
    if(password.length < 6) {
      notify('Password must be of 6 characters atleast');
      return
    }
    else if(/[A-Z]/.test(password))
    {
      notify(registerError + 'Must Contain atleast one capital letter');
      return
    }
    else if(/[0-9]/.test(password))
    {
      notify(registerError + 'Must Contain atleast one number');
      return
    }
    
    createUser(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        swal("Thank You!", "For creating an account!", "success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        notify(errorMessage);
      });
    
  }

  const handleSignInWithGoogle = () => {
    handleGoogleUser()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      swal("Thank You!", "For creating an account!", "success");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div>
        <div className='w-fit mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl'>
            <div className='text-center px-8 pt-6'>
                <h2 className="text-purple-700 text-3xl font-bold">Register Here</h2>
                <p className='text-xl font-light mt-2'>
                    Create an account to explore
                    <br />
                    our services
                </p>
            </div>
            <form onSubmit={handleRegister} action="">
              <div className='px-8 my-8 flex flex-col'>
                  <input type="email" name="email" placeholder='Enter your email here' className='outline-purple-600 p-2 border-2 border-black rounded-md' />
                  <div className='mt-8 flex items-center'>
                      <input type={showPass ? 'text' : 'password'} name="password" placeholder='Enter your password here' className='outline-purple-600 p-2 border-2 border-black rounded-md w-full' />
                      <span onClick={() => {setShowPass(!showPass)}} className='cursor-pointer -ml-7'>
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                      </span>
                  </div>
              </div>
              <div className='w-full my-1  px-8'>
                  <input type="submit" value="Register" className='bg-purple-600 text-white text-lg font-medium w-full py-1 rounded-md cursor-pointer' />
              </div>
            </form>
            <div className='mx-8 flex justify-center items-center gap-2 p-1 text-sm mb-8'>
                <p className='font-light'>Already have an account?</p>
                <Link to={'/login'} className='text-purple-800 font-medium'>Login</Link>
            </div>
            <div className='px-8 mb-6'>
                <div className='flex justify-center items-center'><hr className='grow' /><span className='px-4'>OR</span><hr className='grow' /></div>
                <button onClick={handleSignInWithGoogle} className='flex justify-start items-center gap-2 text-lg border-2 border-gray-300 rounded-md w-full py-1 pl-2 mt-4'><FcGoogle className='text-2xl' /><span>Sign-up with google</span></button>
            </div>
        </div>
        <ToastContainer position='bottom-right' />
    </div>
  )
}

export default Register