import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {linking} from './src/_nav';
import BottomTabs from './src/tabs/index';
import Search from './src/screens/search';
import SearchBar from './src/components/home/SearchBar';
import Cart from './src/screens/cart';
import Message from './src/screens/message';
import Register from './src/screens/register';
import EmailRegister from './src/screens/register/email';
import PhoneNumber from './src/screens/register/phone-number';
import VerifyEmail from './src/screens/register/_components/VerifyEmail';
import VerifyPhoneNumber from './src/screens/register/_components/VerifyPhoneNumber';
import CompleteRegister from './src/screens/register/_components/CompleteRegister';
import Login from './src/screens/login';
import AccountSettings from './src/screens/account-settings';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {NativeWindStyleSheet} from 'nativewind';
import {Platform} from 'react-native';

import Toast from 'react-native-toast-message';
import HeaderAccount from './src/screens/account/_components/HeaderAccount';
import ManageSecurity from './src/screens/account-settings/_components/ManageSecurity';
import InputNewEmail from './src/screens/account-settings/_components/modal/InputNewEmail';
import MethodVerifyChangeEmail from './src/screens/account-settings/method-verify-change-email';
import MethodVerifyChangePhoneNumber from './src/screens/account-settings/method-verify-change-phone-number';
import HeaderMethodVerify from './src/screens/account-settings/_components/HeaderMethodVerify';
import InputOtpEmail from './src/screens/account-settings/_components/modal/InputOtpEmail';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking} ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={BottomTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="search"
              component={Search}
              options={({navigation}) => ({
                header: () => <SearchBar navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="cart"
              component={Cart}
              options={{
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="message"
              component={Message}
              options={{
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={({navigation}) => ({
                headerTitle: 'Daftar',
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <AntDesign
                    style={
                      Platform.OS === 'web'
                        ? {marginHorizontal: 10}
                        : {marginRight: 15}
                    }
                    onPress={() => navigation.navigate('Home')}
                    name="arrowleft"
                    size={24}
                    color="black"
                  />
                ),
              })}
            />
            <Stack.Screen
              name="email"
              component={EmailRegister}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="phone-number"
              component={PhoneNumber}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="verify-email"
              component={VerifyEmail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="verify-phone-number"
              component={VerifyPhoneNumber}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="complete-register"
              component={CompleteRegister}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AccountSettings"
              component={AccountSettings}
              options={{
                headerTitle: 'Akun Saya',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="ManageSecurity"
              component={ManageSecurity}
              options={({navigation}) => ({
                headerTitle: 'Login Dan Keamanan',
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <AntDesign
                    style={
                      Platform.OS === 'web'
                        ? {marginHorizontal: 10}
                        : {marginRight: 15}
                    }
                    onPress={() => navigation.navigate('AccountSettings')}
                    name="arrowleft"
                    size={24}
                    color="black"
                  />
                ),
              })}
            />
            <Stack.Screen
              name="MethodVerifyChangeEmail"
              component={MethodVerifyChangeEmail}
              options={({navigation}) => ({
                headerTitle: 'Metode Verifikasi',
                headerTitleAlign: 'center',
                header: () => <HeaderMethodVerify navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="MethodVerifyChangePhoneNumber"
              component={MethodVerifyChangePhoneNumber}
              options={({navigation}) => ({
                headerTitle: 'Metode Verifikasi',
                headerTitleAlign: 'center',
                header: () => <HeaderMethodVerify navigation={navigation} />,
              })}
            />
            {/* <Stack.Screen
              name="InputOtpEmail"
              component={InputOtpEmail}
              options={{
                headerTitle: 'Verifikasi Kode',
              }}
            /> */}
            <Stack.Screen
              name="InputNewEmail"
              component={InputNewEmail}

              // options={{
              //   headerTitle: 'Login Dan Keamanan',
              //   headerTitleAlign: 'center',
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});
