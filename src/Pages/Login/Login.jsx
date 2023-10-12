import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [loginError, setLoginError] = useState('');     // an empty string evaluated to be false
    const [loginSuccess, setLoginSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

  const notify = (message) => toast.error(message);

    const { signInUser, handleGoogleUser, auth, provider } = useContext(AuthContext);

    const handleLogin = e => {
        setLoginError('');
        setLoginError('');
    
        e.preventDefault();
        const email = e.target.email.value;     // from name attribute of input:email
        const password = e.target.password.value;
    
        //signin
        signInUser(email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            swal("Login Successfull", "", "success");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            notify(errorMessage)
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
                <h2 className="text-purple-700 text-3xl font-bold">Login Here</h2>
                <p className='text-xl font-light mt-2'>
                    Welcome Back you've
                    <br />
                    been missed!
                </p>
            </div>
            <form onSubmit={handleLogin} action="">
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
                    <input type="submit" value="Login" className='bg-purple-600 text-white text-lg font-medium w-full py-1 rounded-md cursor-pointer' />
                </div>
            </form>
            <div className='mx-8 flex justify-center items-center gap-2 p-1 text-sm mb-8'>
                <p className='font-light'>Don't have an account yet?</p>
                <Link to={'/register'} className='text-purple-800 font-medium'>Register</Link>
            </div>
            <div className='px-8 mb-6'>
                <div className='flex justify-center items-center'><hr className='grow' /><span className='px-4'>OR</span><hr className='grow' /></div>
                <button onClick={handleSignInWithGoogle} className='flex justify-start items-center gap-2 text-lg border-2 border-gray-300 rounded-md w-full py-1 pl-2 mt-4'><FcGoogle className='text-2xl' /><span>Continue with google</span></button>
            </div>
        </div>
        <ToastContainer position='bottom-right' />
    </div>
  )
}

export default Login