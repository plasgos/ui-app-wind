import React from "react";

import { ScrollView, Text, View } from "react-native";
import LayoutHomeScreen from "../_layout";
import { Categories } from "../../components/Categories";
import { RecomendedStore } from "../../components/RecomendedStore";
import { FindYourItem } from "../../components/FindYourItem";
import { NewProducts } from "../../components/NewProducts";

export default function HomeScreen() {
  // console.log(props);

  return (
    <>
      <LayoutHomeScreen>
        <ScrollView showsVerticalScrollIndicator>
          <View className="h-[10px] bg-white" />

          <View className="p-3 h-[120px] bg-white my-3"></View>

          <Categories />
          <RecomendedStore />

          <FindYourItem />
          <NewProducts />
        </ScrollView>
      </LayoutHomeScreen>
    </>
  );
}
