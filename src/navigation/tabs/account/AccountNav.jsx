import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Login from '../../../screens/login';
import Account from '../../../screens/account';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderAccount from '../../../screens/account/_components/HeaderAccount';
import AccountSettings from '../../../screens/account-settings';
import ManageSecurity from '../../../screens/account-settings/_components/ManageSecurity';
import MethodVerifyChangeEmail from '../../../screens/account-settings/method-verify-change-email';
import HeaderMethodVerify from '../../../screens/account-settings/_components/HeaderMethodVerify';
import MethodVerifyChangePhoneNumber from '../../../screens/account-settings/method-verify-change-phone-number';

export default function AccountNav() {
  const AccountStack = createNativeStackNavigator();
  const {logged_in} = useSelector(state => state.login);
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={logged_in ? Account : Login}
        options={({navigation}) => ({
          headerTitle: '',
          headerShown: logged_in ? true : false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user-o" size={size} color={color} />;
          },
          header: () => <HeaderAccount navigation={navigation} />,
        })}
      />
      <AccountStack.Screen
        name="AccountSettings"
        component={logged_in ? AccountSettings : Login}
        options={{
          headerTitle: 'Akun Saya',
          headerTitleAlign: 'center',
        }}
      />
      <AccountStack.Screen
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
      <AccountStack.Screen
        name="MethodVerifyChangeEmail"
        component={MethodVerifyChangeEmail}
        options={({navigation}) => ({
          header: () => <HeaderMethodVerify navigation={navigation} />,
        })}
      />
      <AccountStack.Screen
        name="MethodVerifyChangePhoneNumber"
        component={MethodVerifyChangePhoneNumber}
        options={({navigation}) => ({
          header: () => <HeaderMethodVerify navigation={navigation} />,
        })}
      />
    </AccountStack.Navigator>
  );
}
