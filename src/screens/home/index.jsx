import { Text, View } from 'react-native';

export default function HomeScreen(props) {
  console.log(props);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home Screen</Text>
      <Text onPress={() => props.navigation.push("Login")}>Login Screen</Text>
    </View>
  );
}
