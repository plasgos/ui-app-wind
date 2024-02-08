import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  Dimensions,
} from "react-native";

import { IoLocationOutline } from "react-icons/io5";
import { formatPrice } from "../lib/format-price";

const data = [
  {
    image: require("../../assets/images/banner.png"),
    title: "Parfum Ucok Baba",
    price: 70000,
    location: "Depok",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../../assets/images/banner.png"),
    title: "Tas Selempang Pria Waistbag Slingbag Tas ",
    price: 170000,
    location: "Bogor",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../../assets/images/banner.png"),
    title: "Susu Kambing Etamilku isi 10 Saset",
    price: 70000,
    location: "Depok",
    isGrosir: true,
    isCashback: true,
  },
  {
    image: require("../../assets/images/banner.png"),
    title: "Sambal teri khas singkawang",
    price: 19000,
    location: "Jakarta",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../../assets/images/banner.png"),
    title: "Berkah furniture jogja",
    price: 3500,
    location: "Bantul",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../../assets/images/banner.png"),
    title: "Parfum Ucok Baba",
    price: 70000,
    location: "Depok",
    isGrosir: false,
    isCashback: false,
  },
];

const Item = ({ product }) => (
  <View className="flex flex-col justify-between rounded-lg shadow-md border border-slate-300 w-[170px]">
    <View className="w-full">
      <Image
        className="rounded-lg"
        style={{ width: "100%" }}
        source={product.image}
      />
    </View>
    <Text className="m-3">{product.title}</Text>
    <Text className="font-bold text-base mx-3 mb-3">
      {formatPrice(product.price)}
    </Text>
    <View className=" mx-3 mb-3 flex-row items-center">
      <View>
        <IoLocationOutline size={18} />
      </View>
      <View>
        <Text className=" ml-2">{product.location}</Text>
      </View>
    </View>
  </View>
);

export const NewProducts = () => {
  return (
    <View className="mb-3 px-3 bg-white">
      <View>
        <Text className="font-bold text-lg bg-white  pt-2 mb-3">
          Produk Terbaru Untukmu
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item product={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 10,
            marginBottom: 10,
          }}
        />
      </SafeAreaView>
    </View>
  );
};
