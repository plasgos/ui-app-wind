/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import createCompressor from 'redux-persist-transform-compress';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import rootSaga from './sagas';
import rootReducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import secureStorage from "../lib/secureStorage";
import {Platform} from 'react-native';
// import * as SecureStore from "expo-secure-store";

// const getStorage = (key) => {
//   console.log("🚀 ~ getStorage ~ key:", key);
//   if (Platform.OS === "android") {
//     return {
//       ...secureStorage,
//     };
//   } else {
//     return AsyncStorage;
//   }
// };

// const getStorage = (key) => {
//   if (Platform.OS === "android") {
//     return {
//       getItem: async () => await SecureStore.getItem(key),
//       setItem: async () => {
//         return { ...secureStorage };
//       },
//       removeItem: async () => await SecureStore.removeItem(key),
//     };
//   } else {
//     return null;
//   }
// };

const encryptor = encryptTransform({secretKey: 'secretkey'});

const compressor = createCompressor({
  whitelist: ['register'],
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  transforms: Platform.OS === 'web' ? [encryptor] : [],
  key: 'root',
  // storage: getStorage("register"),
  storage: AsyncStorage,
  whitelist: ['register'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store, {transform: [compressor]});

sagaMiddleware.run(rootSaga);
