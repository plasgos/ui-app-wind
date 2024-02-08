import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const listCategories = [
  { image: "../../assets/images/dashboard.png", title: "Semua Kategori" },
  { image: "../../assets/images/notebook.png", title: "Alat Tulis Kantor" },
  { image: "../../assets/images/book.png", title: "Buku" },
  { image: "../../assets/images/responsive.png", title: "Elektronik" },
  { image: "../../assets/images/tshirt.png", title: "Fashion Anak" },
  { image: "../../assets/images/muslimah.png", title: "Fashion Muslim" },
  { image: "../../assets/images/fashion.png", title: "Fashion Pria" },
];

export const Categories = () => {
  return (
    <ScrollView className="w-100 bg-white py-5 px-1 " horizontal={true}>
      {listCategories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {}}
          className="items-center w-[80px]"
        >
          <View className="mb-2">
            <View className="w-[50px] h-[50px] rounded-full bg-sky-200" />
            <Image
              className="absolute left-3 top-3"
              style={{ width: 24, height: 24 }}
              source={category.image}
            />
          </View>
          <Text className="text-slate-400 text-xs text-center">
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
