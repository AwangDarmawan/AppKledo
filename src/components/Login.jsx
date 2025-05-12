import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import { loginUser } from '../Services/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


 

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
       console.log('Response API:', res.data); 
     
       dispatch(setUser({ user: res.data.data.user, 
        token: res.data.data.data.access_token
        }));
      
      // localstorage
      localStorage.setItem('USER', JSON.stringify(res.data.data.user));
      localStorage.setItem('TOKEN', res.data.data.data.access_token);
      

      console.log("Data pengguna ada:", setUser({user: res.data.data.user}));
      console.log("Token:", setUser({token: res.data.data.data.access_token })); 
      toast.success('Login berhasil!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.error('Login error:', error);
      throw error;

    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white border-0">
          <div className="  p-2 w-full max-w-md">
            <h1 className="text-4xl font-bold text-black text-center my-6">Login</h1>
            <div className='bg-gray-100 rounded-lg shadow-lg w-full max-w-md p-5 '>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} >
                <label className='text-black font-semibold'>Email</label>
              <input
                type="email"
                name="email"
                 placeholder="Masukan Email"
                className="bg-transparent border border-gray-300 text-black rounded-lg h-12 px-2 text-sm"
                 {...register('email', {
                    required: 'Email Required',
                    pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid Email',
              },
               })}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

              <label className='text-black font-semibold'>Password</label>
              <div className="flex flex-row relative justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent border border-gray-300 rounded-lg h-12 px-3 w-full text-black text-sm"
                  name="password"
                  placeholder="Enter Password"
                  {...register('password', { required: 'Password is required' })}
                />
                <i
                  className="icon-show absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}>{showPassword ? 
                    <FontAwesomeIcon icon={faEye} size={25} /> : <FontAwesomeIcon icon={faEyeSlash} size={25} />}
                </i>
              </div>
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`h-12 w-full rounded-lg text-white ${
                  isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                   {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                        Loading...
                      </>
                    ) : (
                      'Login'
                    )}
              </button>

              
            </form>
          </div>
          </div>
      </div>
    </>
  )
}

export default Login
