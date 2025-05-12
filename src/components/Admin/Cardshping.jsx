import React, { useEffect, useState } from 'react'
import { getShippingComps, searchShipingComps } from '../../Services/Api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



function Cardshping() {
  const [shippingComps, setShippingComps] = useState([])
   const [loading, setLoading] = useState(true);
   const [keyword, setKeyword] = useState('');
  

  // useEffect(() => {
    const fetchShipping = async (token) => {
      try {
        // const token = localStorage.getItem('TOKEN');
        const response = await getShippingComps(token);
        setShippingComps(response.data.data); 
        console.log("data shiping", response.data.data)
      } catch (error) {
        console.error('Gagal mengambil data shipping:', error);
      }
      finally {
        setLoading(false); 
      }
    };

  //   fetchShipping();
  // }, []);


const handleSearch = async (e) => {
    const value = e.target.value;
    setKeyword(value);

    const token = localStorage.getItem('TOKEN');

    if (value.trim() === '') {
      fetchShipping(token);
      return;
    }

    try {
      setLoading(true);
      const response = await searchShipingComps(value, token);
      setShippingComps(response.data.data);
      console.log("mencari data", response.data.data)
    } catch (error) {
      console.error('Gagal melakukan pencarian shipping:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    fetchShipping(token);
    
  }, []);
 
 

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Shipping Comps
            </h2>
            <div className='flex-1 justify-content-between'>
            <button className="text-white text-center p-2 bg-blue-500  hover:bg-blue-600">
              <span className="text-lg">+</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Cari"
              className="w-64 px-4 py-2 border rounded focus:outline-none"
              value={keyword}
            onChange={handleSearch}
            />
          </div>
         </div>
          {/* Empty Table */}
            {loading ? (
          <div className="flex justify-center items-center py-4">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="3x"
              className="text-blue-500"
            />
          </div>
        ) : (
          <table className="w-full text-left border-t border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Nama</th>
              </tr>
            </thead>
            <tbody>
              {shippingComps.length > 0 ? (
                shippingComps.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3">{item.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-gray-400 italic">Tidak ada data</td>
                </tr>
              )}
            
            </tbody>
           
          </table>
            )}
        </div>
      </main>
     
    </>
  )
}

export default Cardshping
