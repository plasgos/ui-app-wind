import SearchBar from "../components/SearchBar";
import NewProducts from "../components/NewProducts";

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function search() {
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          header: () => <SearchBar />,
        }}
      />
      <ScrollView>
        <Text>T-Shirt</Text>
      </ScrollView>
    </View>
  );
}
