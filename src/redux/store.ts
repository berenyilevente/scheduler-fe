import { combineReducers } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Action, configureStore } from '@reduxjs/toolkit';
import BookingLayoutReducer from './state/booking-layout-state/bookingLayoutReducer';
import AuthReducer from './state/auth-state/authReducer';
import BookingReducer from './state/booking-state/bookingReducer';
import SettingsReducer from './state/settings-state/settingsReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['bookingLayouts'],
};

export const rootReducer = combineReducers({
  bookingLayouts: BookingLayoutReducer,
  bookings: BookingReducer,
  settings: SettingsReducer,
  auth: persistReducer(authPersistConfig, AuthReducer),
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
