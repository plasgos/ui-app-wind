import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FindYourItem = () => {
  return (
    <View className=" mb-3 bg-white">
      <Text className="font-bold text-lg bg-white pl-3 pt-2">
        Cari Kebutuhan Kamu
      </Text>
      <Text className=" text-sm bg-white pl-3 pt-1">
        Cari Barang untuk memenuhi kebutuhan bisnis kamu dengan cepat
      </Text>
      <View className="w-100 bg-white py-3 px-3">
        <Image
          className="rounded-lg"
          style={{width: '100%'}}
          source={require('../../../assets/images/banner.png')}
        />
      </View>
      <View className="flex-row justify-end bg-white pb-3 px-3">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-[#fa541c]">Ajukan Permintaan </Text>
          <Ionicons name="chevron-forward" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FindYourItem;
