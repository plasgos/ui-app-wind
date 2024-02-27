import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "../../components/home/Categories";
import RecomendedStore from "../../components/home/RecomendedStore";
import FindYourItem from "../../components/home/FindYourItem";
import NewProducts from "../../components/home/NewProducts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useClearAsyncStorage from "../../hooks/use-clear-asyncStorage";

export default function HomeScreen() {
  // useEffect(() => {
  //   const deleteAllData = async () => {
  //     try {
  //       const allKeys = await AsyncStorage.getAllKeys();
  //       await AsyncStorage.multiRemove(allKeys);

  //       console.log("All data deleted successfully!");
  //     } catch (error) {
  //       console.log("Error deleting data:", error);
  //     }
  //   };

  //   deleteAllData();

  //   return () => {};
  // }, []);

  useClearAsyncStorage();

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
