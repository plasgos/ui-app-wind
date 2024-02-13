import { NativeWindStyleSheet } from "nativewind";
import Categories from "../../components/Categories";
import RecomendedStore from "../../components/RecomendedStore";
import FindYourItem from "../../components/FindYourItem";
import NewProducts from "../../components/NewProducts";

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <>
      <ScrollView>
        <StatusBar translucent={false} />
        <View className="h-[10px] bg-white" />
        <View className="w-full p-3 h-[120px] bg-white my-3"></View>
        <Categories />
        <RecomendedStore />

        <FindYourItem />
        <NewProducts />
      </ScrollView>
    </>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
