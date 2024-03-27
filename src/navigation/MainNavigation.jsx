import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {linking} from './linking';
import BottomTabs from './tabs';
import Search from '../screens/search';
import Cart from '../screens/cart';
import Message from '../screens/message';
import Register from '../screens/register';
import EmailRegister from '../screens/register/email';
import PhoneNumberRegister from '../screens/register/phone-number';
import VerifyEmail from '../screens/register/_components/VerifyEmail';
import VerifyPhoneNumber from '../screens/register/_components/VerifyPhoneNumber';
import CompleteRegister from '../screens/register/_components/CompleteRegister';
import Login from '../screens/login';
import {Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBar from '../../src/components/home/SearchBar';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function MainNavigation() {
  const {logged_in} = useSelector(state => state.login);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="search"
          component={logged_in ? Search : Login}
          options={({navigation}) => ({
            headerShown: logged_in ? true : false,
            header: () => <SearchBar navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="cart"
          component={logged_in ? Cart : Login}
          options={{
            headerShown: logged_in ? true : false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="message"
          component={logged_in ? Message : Login}
          options={{
            headerShown: logged_in ? true : false,
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
          component={PhoneNumberRegister}
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
          //   options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
