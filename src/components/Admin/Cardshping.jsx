
import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { getShippingComps, searchShipingComps } from '../../Services/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';



function CardShipping() {
  const [shippingComps, setShippingComps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const { register, watch } = useForm();
  const keyword = watch('search', '');

  const fetchShipping = async (token) => {
    setLoading(true);
    try {
      const response = await getShippingComps(token);
      const { data } = response.data;
      setShippingComps(data);
    } catch (error) {
      console.error('Gagal mengambil data shipping:', error);
    } finally {
      setLoading(false);
    }
  };

 
  const debouncedSearch = useCallback(
    debounce(async (value, token) => {
      if (!token) return;

      if (value.trim() === '') {
        fetchShipping(token);
        return;
      }
      setLoading(true);
      try {
        const response = await searchShipingComps(value, token);
        const { data } = response.data;
        setShippingComps(data);
      } catch (error) {
        console.error('Gagal melakukan pencarian shipping:', error);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

 
   useEffect(() => {
    const storedToken = localStorage.getItem('TOKEN');
    setToken(storedToken);
    if (storedToken) {
      fetchShipping(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      debouncedSearch(keyword, token);
    }
    return () => {
      debouncedSearch.cancel(); 
    };
  }, [keyword, token, debouncedSearch]);

  

  return (
    <main className="flex-1 p-10">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex gap-2">
          <h2 className="text-xl font-bold text-gray-700">
            Shipping Comps
          </h2>
          <div className="flex-1 justify-content-between">
            {token ? (
            <Link to={"/createshping"} className="text-white text-center p-2 bg-blue-500 hover:bg-blue-600">
              <span className="text-lg">+</span>
            </Link>
            ) : null }
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Cari"
              className="w-64 px-4 py-2 border rounded focus:outline-none"
              {...register('search')}
              disabled={!token}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-4">
            <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-blue-500" />
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
                  <tr key={item.id} >
                  <td className="p-3 border-b border-b-gray-100 hover:text-blue-600">
                    <Link to={`/update-shipping/${item.id}`} state={{ name: item.name }}>
                        {item.name}
                      </Link>

                    </td>
                    {/* <Link to={`/update-shipping/${item.id}`}>
                  {item.name}
                    </Link> */}
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
  );
}

export default CardShipping;
