import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HeaderHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex flex-row items-center gap-x-3 p-3 bg-white  ">
      <StatusBar translucent={false} />
      <View className="absolute left-5 text-slate-300">
        <FontAwesome name="search" size={24} color="#cbd2d9" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        className="flex-1 h-10 w-full border-2 border-slate-300 py-2 px-4 rounded-lg flex pl-10 justify-center"
      >
        <Text style={{ color: "#718096" }}>Cari Kebutuhan anda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("cart")}
        className="text-slate-400"
      >
        <AntDesign name="shoppingcart" size={26} color="#cbd2d9" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("message")}
        className="text-slate-400 mt-0.5"
      >
        <Ionicons name="chatbox-ellipses-outline" size={26} color="#cbd2d9" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("register")}
        className="text-slate-400 mt-0.5"
      >
        <Ionicons name="log-in" size={26} color="#cbd2d9" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderHomeScreen;
