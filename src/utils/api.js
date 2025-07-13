import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/api',
  timeout: 10000,
});

export default apiClient;
