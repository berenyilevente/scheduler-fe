import { combineReducers } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import InputReducer from './state/input-state/inputReducer';
import { Action, configureStore } from '@reduxjs/toolkit';
import BookingLayoutReducer from './state/booking-layout-state/bookingLayoutReducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  inputs: InputReducer,
  bookingLayouts: BookingLayoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, Action<string>>;
