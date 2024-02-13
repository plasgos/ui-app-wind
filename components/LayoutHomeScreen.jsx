import React from "react";

import { ScrollView } from "react-native";
import Header from "./Header";
import BottomBar from "./BottomBar";

const LayoutHomeScreen = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollView className="h-auto pb-[70px]" style={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default LayoutHomeScreen;
