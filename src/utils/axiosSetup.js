import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken, clearTokens } from '@/utils/auth';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const refreshAccessToken = async () => {
    try {
        const refreshToken = getRefreshToken();
        const response = await axios.post('/api/auth/refresh-token', {
            refreshToken: refreshToken,
        });
        setAccessToken(response.data);
    } catch (error) {
        console.error('Failed to refresh access token:', error);
        clearTokens();
    }
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            await refreshAccessToken();
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
