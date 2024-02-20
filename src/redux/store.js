import { applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createCompressor from "redux-persist-transform-compress";
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootSaga from "./sagas";
import rootReducers from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const encryptor = encryptTransform({ secretKey: "secretkey" });
const compressor = createCompressor({
  whitelist: ["login"],
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  transforms: [encryptor],
  key: "root",
  storage: AsyncStorage,
  whitelist: ["login"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});
export const persistor = persistStore(store, { transform: [compressor] });

sagaMiddleware.run(rootSaga);
