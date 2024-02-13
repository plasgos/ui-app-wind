import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, HeaderBackButton } from "expo-router";
import SearchBar from "../components/SearchBar";
import NewProducts from "../components/NewProducts";

export default function Search() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          header: () => <SearchBar />,
        }}
      />

      <ScrollView className="flex-1 bg-white">
        <NewProducts />
      </ScrollView>
    </SafeAreaView>
  );
}
