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