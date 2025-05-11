import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  apiURL: baseUrl
});


export const loginUser = (credentials) => api.post(`${baseUrl}/authentication/login`, credentials);


export const getProfile = (token) => api.get('/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
export const searchProfile = (keyword, token) => api.get(`/profile/search?keyword=${keyword}`, {
    headers: { Authorization: `Bearer ${token}` },
  });