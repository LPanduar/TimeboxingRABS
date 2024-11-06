import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/users', // URL del backend
});

export default api;
