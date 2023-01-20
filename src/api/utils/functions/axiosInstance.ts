import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';
import { getCurrentLanguage } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': getCurrentLanguage(),
  },
});
