import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {NativeWindStyleSheet} from 'nativewind';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
