// import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  // FLUSH,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
  // REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import {createStore, applyMiddleware} from 'redux';

import createCompressor from 'redux-persist-transform-compress';
import {encryptTransform} from 'redux-persist-transform-encrypt';
import rootSaga from './sagas';
import rootReducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

const encryptor = encryptTransform({secretKey: 'secretkey'});

const compressor = createCompressor({
  whitelist: ['register'],
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  transforms: Platform.OS === 'web' ? [encryptor] : [],
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['register', 'login'],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       // immutableCheck: false,
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(sagaMiddleware),
// });

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store, {transform: [compressor]});

sagaMiddleware.run(rootSaga);
