import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    // Set your base URL and other Axios configuration options
    baseURL: 'http://localhost:3002',
    timeout: 5000, // Example timeout value
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Modify the request config if needed (e.g., adding headers, authentication token)
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    },
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Modify the response data if needed
        return response.data;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    },
);

export default axiosInstance;
