/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {FontAwesome} from '@expo/vector-icons';

import HeaderHomeScreen from '../components/home/HeaderHomeScreen';
import Home from '../screens/home';
import Notifications from '../screens/notifications';
import RFQ from '../screens/rfq';
import Whislist from '../screens/whislist';
import Account from '../screens/account';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#fa541c',
  headerShown: false,
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
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="homescreen"
        component={Home}
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
        component={Notifications}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="bell-o" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="rfq"
        component={RFQ}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="cube" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="whislist"
        component={Whislist}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="heart-o" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="user-o" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
