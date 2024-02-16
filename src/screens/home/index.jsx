import React from "react";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "../../components/home/Categories";
import RecomendedStore from "../../components/home/RecomendedStore";
import FindYourItem from "../../components/home/FindYourItem";
import NewProducts from "../../components/home/NewProducts";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <StatusBar translucent={true} />

      <View className="h-[10px] bg-white" />
      <View className="w-full p-3 h-[120px] bg-white my-3"></View>
      <Categories />
      <RecomendedStore />
      <FindYourItem />
      <NewProducts />
    </ScrollView>
  );
}
