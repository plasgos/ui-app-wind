import React from "react";

import { ScrollView, View } from "react-native";
import { Header } from "../components/Header";
import { BottomBar } from "../components/BottomBar";

export default function LayoutHomeScreen({ children }) {
  // console.log(props);

  return (
    <>
      <Header />
      <ScrollView className="h-auto pb-[70px]" style={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
      <BottomBar />
    </>
  );
}
