import { Text, View } from 'react-native';

export default function LoginScreen(props) {
   console.log(props);
   return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Login Screen</Text>
      <Text onPress={() => props.navigation.push("Login", {fr: props.route.key})}>Login Screen</Text>
    </View>
  );
}
