import axios from 'axios';

// ✅ Create an Axios instance with base URL
const api = axios.create({
  baseURL: 'https://studyhavenbackend.onrender.com/api',
});

// ✅ Type for the token parameter
export const setAuthToken = (token: string | null): void => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
