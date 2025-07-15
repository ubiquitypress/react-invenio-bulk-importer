import axios, { type AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 30000,
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
