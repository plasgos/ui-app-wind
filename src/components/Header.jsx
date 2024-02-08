import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

export const Header = () => {
  const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  return (
    <SafeAreaView className="flex flex-row items-center gap-x-3 p-3 bg-white">
      <View className="absolute left-5 text-slate-400">
        <IoMdSearch size={26} />
      </View>

      <TextInput
        className="flex-1 h-[40] w-100  border-2 border-slate-400  py-3  px-10 rounded-lg "
        placeholder="Cari Kebutuhan anda"
        placeholderTextColor="#718096"
        onChangeText={handleInputChange}
        value={text}
      />

      <TouchableOpacity className="text-slate-400">
        <IoCartOutline size={26} />
      </TouchableOpacity>

      <TouchableOpacity className="text-slate-400">
        <IoChatboxEllipsesOutline size={26} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
