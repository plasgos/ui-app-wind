import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from "nativewind";
import { withExpoSnack } from 'nativewind';

import './style.css';

import HomeScreen from './src/screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          header: () => {},
          title: "Plasgos | B2B Marketplace"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default withExpoSnack(App); 