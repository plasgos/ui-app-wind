import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from "nativewind";
import { withExpoSnack } from 'nativewind';

import _nav, {linking} from './src/_nav';
import './style.css';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {
          _nav.map(item => (
            <Stack.Screen key={item.name} name={item.name} component={item.component} options={item.options}/>
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default withExpoSnack(App); 