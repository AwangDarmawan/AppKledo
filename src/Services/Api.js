import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  apiURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const loginUser = (credentials) =>
     api.post(`${baseUrl}/authentication/login`, credentials);


export const getShippingComps = (token) => 
    api.get(`${baseUrl}/finance/shippingComps`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const searchShipingComps = (keyword, token) => 
  api.get(`${baseUrl}/finance/shippingComps?search=${keyword}`
  ,{
    headers: { Authorization: `Bearer ${token}` },
  });

  // Tambah Shiping
  export const PostShipingComps = (datacreate,token) => 
  api.post(`${baseUrl}/finance/shippingComps`, datacreate,{
    headers: { Authorization: `Bearer ${token}` },
  });
  
  //  UPDATE ID 
export const updateShippingById = (id, updatedata, token) => {
  return api.put(`${baseUrl}/finance/shippingComps/${id}`,updatedata,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );};

  export const deleteShipingId = (token,id) => {
  return api.delete(`${baseUrl}/finance/shippingComps/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );};