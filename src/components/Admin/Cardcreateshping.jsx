import React from 'react'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { PostShipingComps } from '../../Services/Api';
import { toast } from 'react-toastify';

function CardCreateshping() {
  const { register,handleSubmit,  formState: { errors,isSubmitting} } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate();

   const onSubmit = async (datacreate) => {
    try {
      const token = localStorage.getItem('TOKEN');
      const res = await PostShipingComps(datacreate, token);
       const { data } = res.data;
      console.log('Sukses create:', data);
      toast.success(res.data.message || 'sukses tambah data')
      navigate('/shping'); 
    } catch (error) {
      console.error('Login error:', error);
       toast.error(error.response?.data?.message || 'An error occurred');
           throw error;
    } 
  };

   

  return (
    <>
        <main className="flex-1 p-10">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex gap-2">
                <h2 className="text-xl font-bold text-gray-700">
                  Tambah Shipping Comps
                </h2>
              </div>
                  <div className='my-10'>
                  
                <h3 className="text-gray-700 font-bold pb-3">Nama</h3>
                    <div className="mb-4">
                    <input
                      type="text"
                       name="name"
                      placeholder='Create Shiping '
                      className="w-64 px-4 py-2 border rounded focus:outline-none border-gray-300 text-xs"
                       {...register('name', { required: 'Nama harus diisi' })}
                    />
                    {errors.password && <p className="text-red-400 text-xs font-bold">{errors.password.message}</p>}
                  </div>
                   <button  
                      onClick={handleSubmit(onSubmit)}  
                      className={`rounded px-3 py-1 mt-3 text-sm text-white font-bold 
                      ${isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700' }`}
                      disabled={isSubmitting}>

                      {isSubmitting ? (
                        <>
                        <FontAwesomeIcon icon={faSpinner} spin className="text-white" />
                        Loading...
                        </>
                      ) : (
                        'Simpan'
                      )}
                      </button>
                  </div>
                </div>
               
          </main>
    </>
  )
}

export default CardCreateshping
