import { RootState, store } from '@/redux/store';
import { Store } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';

export function setupInterceptors(store: Store<RootState, any>): void {
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const { accessToken } = store.getState().auth;
      if (accessToken) {
        config.headers!.authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
