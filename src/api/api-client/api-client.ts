import { getCsrfToken } from '@/utils';
import axios, { type AxiosInstance } from 'axios';

/**
 * Axios client instance configured for API communication.
 *
 * @remarks
 * This client is pre-configured with:
 * - 30 second timeout for requests
 * - Cookie credentials included in requests
 * - JSON content type headers
 * - Empty base URL (should be configured externally)
 */
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
