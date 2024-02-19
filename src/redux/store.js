import { applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createCompressor from "redux-persist-transform-compress";
import { encryptTransform } from "redux-persist-transform-encrypt";

import rootSaga from "./sagas";
import rootReducers from "./reducers";

const encryptor = encryptTransform({ secretKey: "secretkey" });
const compressor = createCompressor({
  whitelist: ["login"],
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  transforms: [encryptor],
  key: "root",
  storage,
  whitelist: ["login"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["CHECK_EMAIL"],
      },
    }).concat(sagaMiddleware),
});
export const persistor = persistStore(store, { transform: [compressor] });

sagaMiddleware.run(rootSaga);
