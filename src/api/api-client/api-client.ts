import axios, { type AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const getCsrfToken = (): string | null => {
  const csrfToken = Cookies.get('csrftoken');
  return csrfToken ? csrfToken : null;
};

export const apiClient: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 30000,
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// Add CSRF token to headers if available
apiClient.interceptors.request.use(
  config => {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      config.headers['X-CSRFTOKEN'] = csrfToken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
