import axios from 'axios';

export default axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BASE_ROUTE}`
});
