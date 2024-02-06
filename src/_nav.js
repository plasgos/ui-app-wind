import * as Linking from "expo-linking";

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';

export default [
   {
      name: "Home",
      component: HomeScreen,
      options: {
         headerShown: false,
         title: "Plasgos | B2B Marketplace Indonesia"
      }
   },
   {
      name: "Login",
      component: LoginScreen,
      options: {
         headerShown: false,
         title: "Masuk Plasgos"
      }
   }
]

export const linking = {
   prefixes: [Linking.createURL("/")], // this is the prefix for our app. Could be anything eg https://myapp.com
   config: {
     screens: {
       Home: {
         path: '/'
       },
       Login: {
         path: '/login',
       }
       //  ... other screens
     },
   },
 };