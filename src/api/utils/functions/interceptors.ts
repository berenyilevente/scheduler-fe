import {
  logoutAction,
  refreshTokenAction,
} from '@/redux/state/auth-state/authActions';
import { RootState, store } from '@/redux/store';
import { Store } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { ApiUrl } from '../constants/apiUrls';
import { axiosInstance } from './axiosInstance';

interface ExtendedRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export function setupInterceptors(store: Store<RootState, any>): void {
  const { dispatch } = store;
  let originalConfig;
  const controller = new AbortController();

  axiosInstance.interceptors.request.use(
    (config: ExtendedRequestConfig) => {
      const { accessToken } = store.getState().auth;
      if (accessToken) {
        config.headers!.authorization = `Bearer ${accessToken}`;
      }

      if (config._retry) {
        // Attach a signal to every request so we can abort if we need
        config.signal = controller.signal;
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
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      originalConfig = error.config;
      console.log(error.response);

      if (originalConfig.url !== ApiUrl.Login && error.response) {
        // Access Token was expired
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            dispatch(refreshTokenAction());
            return axiosInstance(originalConfig);
          } catch (err) {
            originalConfig._retry = false;
            return Promise.reject(err);
          }
        }
        if (originalConfig.url === ApiUrl.RefreshToken) {
          controller.abort();
          dispatch(logoutAction());
        }
        return Promise.reject(error);
      }
    }
  );
}
