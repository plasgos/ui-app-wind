import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoNotificationsOutline } from "react-icons/io5";

import { GoPackage } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";

const BottomBar = () => {
  return (
    <SafeAreaView className="flex flex-row items-center justify-between py-3 px-5 bg-white  absolute bottom-0 right-0 w-full  shadow-lg ">
      <TouchableOpacity onPress={() => {}} className="items-center">
        <View className="text-slate-400 mb-1">
          <IoCartOutline size={26} />
        </View>
        <Text className="text-slate-400 text-xs">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} className="items-center">
        <View className="text-slate-400 mb-1">
          <IoNotificationsOutline size={26} />
        </View>
        <Text className="text-slate-400 text-xs">Notifikasi</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} className="items-center">
        <View className="text-slate-400 mb-1">
          <GoPackage size={26} />
        </View>
        <Text className="text-slate-400 text-xs">RFQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} className="items-center">
        <View className="text-slate-400 mb-1 ">
          <IoIosHeartEmpty size={26} />
        </View>
        <Text className="text-slate-400 text-xs">Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} className="items-center">
        <View className="text-slate-400 mb-1">
          <FaRegUser size={26} />
        </View>
        <Text className="text-slate-400 text-xs">Akun</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BottomBar;
