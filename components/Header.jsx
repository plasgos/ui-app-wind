import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Header = () => {
  // const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleSearch = () => {
    // Navigate to the 'Search' screen when TouchableOpacity is pressed
    // Anda perlu mengimpor router dari tempat Anda menggunakannya
    // dan pastikan router telah diinisialisasi dengan benar
    router.push({ pathname: "/search" });
  };

  return (
    <SafeAreaView className="flex flex-row items-center gap-x-3 p-3 bg-white  ">
      <View className="absolute left-5 text-slate-300">
        <FontAwesome name="search" size={24} color="#cbd2d9" />
      </View>

      {/* <TextInput
        className="flex-1 h-[40] w-100  border-2 border-slate-300  py-3  px-10 rounded-lg "
        placeholder="Cari Kebutuhan anda"
        placeholderTextColor="#718096"
        onChangeText={handleInputChange}
        value={text}
      /> */}

      <TouchableOpacity
        onPress={handleSearch} // Trigger handleSearch when TouchableOpacity is pressed
        className="flex-1 h-10 w-full border-2 border-slate-300 py-2 px-4 rounded-lg flex pl-10 justify-center"
      >
        <Text style={{ color: "#718096" }}>Cari Kebutuhan anda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/cart",
          })
        }
        className="text-slate-400"
      >
        <AntDesign name="shoppingcart" size={26} color="#cbd2d9" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/message",
          })
        }
        className="text-slate-400 mt-0.5"
      >
        <Ionicons name="chatbox-ellipses-outline" size={26} color="#cbd2d9" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
