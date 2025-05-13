import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import {  updateShippingById } from '../../Services/Api';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modalhapusshping from './Modalhapusshping';


function Cardupdateshping() {
   const { id } = useParams(); 
     const { register, handleSubmit,formState: { errors,isSubmitting} } = useForm({ mode: 'onBlur' });
    const { state } = useLocation(); 
     const navigate = useNavigate()
      const [idDelete, setIdDelete] = useState(null);
       const [modalHapus, setModalHapus] = useState(false);

     

  const onSubmit = async (updatedata) => {
    try {
      const token = localStorage.getItem('TOKEN'); 
       const res = await updateShippingById(id, updatedata,token);
       const { data } = res.data;
      console.log('Response API:', data); 
      toast.success(res.data.message || 'sukses tambah data')
      navigate('/shping'); 
    } catch (error) {
      console.error('Gagal update:', error);
     toast.error(error.response?.data?.message || 'An error occurred');
      throw error;
    }
  };

  const openModal = (id) => {
    setIdDelete(id);
    setModalHapus(true);
  };
  
  return (
    <>
       <main className="flex-1 p-10">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex gap-2">
                <h2 className="text-xl font-bold text-gray-700">
                  Edit Shipping Comps
                </h2>
                <div className="flex-1 justify-content-between">
                  <button className="text-white text-center p-1 rounded bg-red-600 hover:bg-red-700 "
                  >
                    {/* <span className="text-lg">+</span> */}
                   
                    <FontAwesomeIcon icon={faTrash}  onClick={() => openModal(id,state.name)}/>  
                         
                  </button>
                </div>
              </div>
                  <div className='my-10'>
                  
                <h3 className="text-gray-700 font-bold pb-3">Nama</h3>
                    <div className="mb-4">
                    <input
                      type="text"
                      name='name'
                      defaultValue={state?.name || ''}
                      placeholder='Update Shiping '
                      className="w-64 px-4 py-2 border rounded focus:outline-none border-gray-300 text-xs"
                       {...register('name', { required: 'Nama harus diisi' })}
                    />
                    {errors.name && <p className="text-red-400 text-xs font-bold">{errors.name.message}</p>}
                  </div>
                   <button
                    onClick={handleSubmit(onSubmit)}
                    className={`rounded px-3 py-1 mt-3 text-white text-sm font-bold
                      ${isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700' }`}
                      disabled={isSubmitting}
                    >
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
                    {/* Modal konfirmasi hapus */}
      < Modalhapusshping
        id={idDelete}
        name={state.name}
        isOpen={modalHapus}
        onClose={() => setModalHapus(false)}
      />
          </main>
    </>
  )
}

export default Cardupdateshping
