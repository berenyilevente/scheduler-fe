import {
  logoutAction,
  refreshTokenAction,
} from '@/redux/state/auth-state/authActions';
import { RootState, store } from '@/redux/store';
import { Store } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { ApiUrl } from '../constants/apiUrls';
import { axiosInstance } from './axiosInstance';

export function setupInterceptors(store: Store<RootState, any>): void {
  const { dispatch } = store;
  let originalConfig;
  const controller = new AbortController();

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

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      originalConfig = error.config;
      if (originalConfig.url !== ApiUrl.Login && error.response) {
        // Access Token was expired
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            dispatch(refreshTokenAction());
            // return axiosInstance(originalConfig);
          } catch (_error: any) {
            return Promise.reject(_error.response.data);
          }
        }
        if (originalConfig.url === ApiUrl.RefreshToken) {
          // Abort the original request
          controller.abort();
          // Refreshing token was not successful, the original request failed again
          dispatch(logoutAction());
        }
      }
      if (axios.isCancel(error)) {
        return null;
      }

      return Promise.reject(
        error.response
          ? error.response.data
          : { message: 'Something went wrong' }
      );
    }
  );
}
