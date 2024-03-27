import React from 'react';
import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useSelector} from 'react-redux';

import HeaderHomeScreen from '../../components/home/HeaderHomeScreen';
import HomeScreen from '../../screens/home';
import Notifications from '../../screens/notifications';
import Login from '../../screens/login';
import RFQ from '../../screens/rfq';
import Whislist from '../../screens/whislist';
import Account from '../../screens/account';
import HeaderAccount from '../../screens/account/_components/HeaderAccount';
import AccountNav from './account/AccountNav';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#fa541c',
  headerShown: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 90 : 60,
    backgroundColor: 'white',
  },
};

export default function TabsLayout() {
  const {logged_in} = useSelector(state => state.login);
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="hometab"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
          headerShown: true,
          header: props => (
            <HeaderHomeScreen {...props} navigation={navigation} />
          ),
        })}
      />
      <Tab.Screen
        name="notifications"
        component={logged_in ? Notifications : Login}
        options={{
          headerShown: logged_in ? true : false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="bell-o" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="rfq"
        component={logged_in ? RFQ : Login}
        options={{
          headerShown: logged_in ? true : false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="cube" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="whislist"
        component={logged_in ? Whislist : Login}
        options={{
          headerShown: logged_in ? true : false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="heart-o" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNav}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user-o" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
