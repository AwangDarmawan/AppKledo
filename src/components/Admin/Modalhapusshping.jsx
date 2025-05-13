
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteShipingId } from '../../Services/Api';
import { useForm } from 'react-hook-form';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Modalhapusshping( {id,name,onClose, isOpen}) {
const { handleSubmit, formState: {isSubmitted } } = useForm();
 const navigate = useNavigate()
 const Deletebyid = async () => {
    try {
  
      const token = localStorage.getItem('TOKEN');
      const res = await deleteShipingId(token,id);
      const { data } = res.data;
      console.log('Shipping deleted:', data);
      
      toast.success(res.data.message || 'sukses Delete data')
      navigate('/shping'); 
      
     
    } catch (error) {
      console.error('Gagal mengambil data shipping:', error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };
  if (!isOpen) return null;
  return (
    <>
    <div className="top-0 fixed left-60">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Hapus Shipping </h2>
        <p className="mb-6 text-gray-600 font-semibold">{name}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose} 
            className="px-4 py-2 bg-gray-400  text-white rounded hover:bg-gray-300"
          >
            Batal
          </button>
          <button
           onClick={handleSubmit(Deletebyid)}  
            className={`px-4 py-2 text-white
            ${isSubmitted? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700' }`}
            disabled={isSubmitted}
          >
            {isSubmitted ? (
             <>
            <FontAwesomeIcon icon={faSpinner} spin className="text-white" />
            Loading...
              </>
             ) : (
              'YA'
                )}
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modalhapusshping
