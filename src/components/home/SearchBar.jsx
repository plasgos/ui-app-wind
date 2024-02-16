import React, { useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = ({ navigation }) => {
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input element when component mounts
    inputRef.current.focus();
  }, []);

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  return (
    <SafeAreaView className="flex flex-row items-center gap-x-3 p-3 bg-white  ">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View className="absolute left-16 text-slate-300">
        <FontAwesome name="search" size={24} color="#cbd2d9" />
      </View>

      <TextInput
        ref={inputRef}
        className="flex-1 h-[40] w-100  border-2 border-slate-300  py-3  px-10 rounded-lg "
        placeholder="Cari Kebutuhan anda"
        placeholderTextColor="#718096"
        onChangeText={handleInputChange}
        value={text}
      />
    </SafeAreaView>
  );
};

export default SearchBar;
