import axios from 'axios';

const api = axios.create({
  baseURL: 'https://arventure-backend.onrender.com/api', // Ajusta a la URL de tu backend
  headers: { 'Content-Type': 'application/json' }
});

export default api;