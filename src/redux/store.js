import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import logger from 'redux-logger';

import userDataReducer from './slices/userDataSlice';

const persistConfig = {
  key: 'appData',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  userDataReducer: userDataReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  // middleware: [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
export default store;
