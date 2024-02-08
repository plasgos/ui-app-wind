import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { IoStorefrontSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

const listStore = [
  { title: "Kios Jajan", location: "Bandung" },
  { title: "Tokozstore", location: "Aceh Utara" },
  { title: "HCS-Collection", location: "Sleman" },
  { title: "Sentra Konveksi Kolor", location: "Jepara" },
  { title: "Berkah Furniture", location: "Bantul" },
  { title: "Kiraina Ms Glow", location: "Malang" },
  { title: "OurShoes_2", location: "Bekasi" },
];

export const RecomendedStore = () => {
  return (
    <View className=" my-3">
      <Text className="font-bold text-lg bg-white pl-3 pt-2">
        Toko Terbaru Untukmu
      </Text>
      <ScrollView
        className="w-100 bg-white py-3 px-3 gap-x-3 "
        horizontal={true}
      >
        {listStore.map((store, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            className="flex flex-col justify-between w-[110px] p-2 border border-slate-400 rounded-lg "
          >
            <View className="mb-2 mt-2 mx-auto text-center text-slate-400">
              <IoStorefrontSharp size={80} />
            </View>
            <Text className=" text-xs  mb-3 ">{store.title}</Text>

            <View className="flex-row">
              <View className="mr-1">
                <IoLocation size={18} />
              </View>
              <Text className=" text-xs  ">{store.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
