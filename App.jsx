import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import _nav, {linking} from './src/_nav';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {AntDesign} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {NativeWindStyleSheet} from 'nativewind';

import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
        //  linking={linking}
        >
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
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="message" component={Message} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={({navigation}) => ({
                headerTitle: 'Daftar',
                headerLeft: () => (
                  <AntDesign
                    style={{marginHorizontal: 11}}
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
