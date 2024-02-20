import * as Linking from "expo-linking";

// import HomeScreen from "./screens/home";
// import RegisterScreen from "./screens/register";

// export default [
//   {
//     name: "Home",
//     component: HomeScreen,
//     options: {
//       headerShown: false,
//       title: "Plasgos | B2B Marketplace Indonesia",
//     },
//   },
//   {
//     name: "Register",
//     component: RegisterScreen,
//     options: {
//       headerShown: false,
//       title: "Daftar Plasgos",
//     },
//   },
// ];

export const linking = {
  prefixes: [Linking.createURL("/")], // this is the prefix for our app. Could be anything eg https://myapp.com
  config: {
    screens: {
      Home: {
        path: "/",
      },
      Register: {
        path: "/register",
      },
      Login: {
        path: "/login",
      },
      //  ... other screens
    },
  },
};
