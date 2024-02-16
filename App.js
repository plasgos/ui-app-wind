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
import Register from "./src/screens/register";
import EmailRegister from "./src/screens/register/email";
import PhoneNumber from "./src/screens/register/phone-number";
import VerifyEmail from "./src/screens/register/_components/VerifyEmail";

import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={({ navigation }) => ({
              header: () => <SearchBar navigation={navigation} />,
            })}
          />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="message" component={Message} />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ title: "Daftar" }}
          />
          <Stack.Screen
            name="email"
            component={EmailRegister}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="phone-number"
            component={PhoneNumber}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verify-email"
            component={VerifyEmail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
