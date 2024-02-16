import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import _nav, { linking } from "./src/_nav";
import BottomTabs from "./src/tabs/index";
import Search from "./src/screens/search";
import SearchBar from "./src/components/home/SearchBar";
import Cart from "./src/screens/cart";
import Message from "./src/screens/message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottomtabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({ navigation }) => ({
            header: () => <SearchBar navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
