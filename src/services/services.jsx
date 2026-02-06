import axios from 'axios';
import config from '../config/config';

const apiClient = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export const insertPledge = async (pledgeData) => {
  try {
    const response = await apiClient.post(config.ENDPOINTS.INSERT_PLEDGE, pledgeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;