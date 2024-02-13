import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { formatPrice } from "../lib/format-price";

const data = [
  {
    image: require("../assets/images/banner.png"),
    title: "Parfum Ucok Baba",
    price: 70000,
    location: "Depok",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../assets/images/banner.png"),
    title: "Tas Selempang Pria Waistbag Slingbag Tas ",
    price: 170000,
    location: "Bogor",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../assets/images/banner.png"),
    title: "Susu Kambing Etamilku isi 10 Saset",
    price: 70000,
    location: "Depok",
    isGrosir: true,
    isCashback: true,
  },
  {
    image: require("../assets/images/banner.png"),
    title: "Sambal teri khas singkawang",
    price: 19000,
    location: "Jakarta",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../assets/images/banner.png"),
    title: "Berkah furniture jogja",
    price: 3500,
    location: "Bantul",
    isGrosir: false,
    isCashback: false,
  },
  {
    image: require("../assets/images/banner.png"),
    title: "Parfum Ucok Baba",
    price: 70000,
    location: "Depok",
    isGrosir: false,
    isCashback: false,
  },
];

const CardProducts = ({ product }) => (
  <TouchableOpacity className="flex flex-col justify-between rounded-lg grow shadow-md border border-slate-300 w-[150px]  my-1 mx-1 ">
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
      <EvilIcons name="location" size={18} color="black" />
      <View>
        <Text className=" ml-2">{product.location}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const NewProducts = () => {
  return (
    <View className="mb-3 px-3 bg-white">
      <View>
        <Text className="font-bold text-lg bg-white  pt-2 mb-3">
          Produk Terbaru Untukmu
        </Text>
      </View>
      <View className="flex-row flex-wrap  ">
        {data.map((data, index) => (
          <CardProducts key={index} product={data} />
        ))}
      </View>
    </View>
  );
};
export default NewProducts;
